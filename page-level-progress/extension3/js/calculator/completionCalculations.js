define([
  'core/js/adapt'
], function(Adapt) {

  var Completion = Backbone.Controller.extend({

    subProgressCompleted: 0,
    subProgressTotal: 0,
    nonAssessmentCompleted: 0,
    nonAssessmentTotal: 0,
    assessmentCompleted: 0,
    assessmentTotal: 0

  });

  function calculatePercentageComplete(model) {
    var completionObject = calculateCompletion(model);// will pass model as input
    // take all assessment, nonassessment and subprogress into percentage
    // this allows the user to see if assessments have been passed, if assessment components can be retaken, and all other component's completion
    var completed = completionObject.nonAssessmentCompleted + completionObject.assessmentCompleted + completionObject.subProgressCompleted;
    var total  = completionObject.nonAssessmentTotal + completionObject.assessmentTotal + completionObject.subProgressTotal;
    var percentageComplete = Math.floor((completed / total)*100);
    return percentageComplete;
  }

  // Calculate completion of a contentObject
  function calculateCompletion(contentObjectModel) {// will take model as input

    var completion = new Completion();
    /* {

      subProgressCompleted: 0,
      subProgressTotal: 0,
      nonAssessmentCompleted: 0,
      nonAssessmentTotal: 0,
      assessmentCompleted: 0,
      assessmentTotal: 0
  
    } */

    var viewType = contentObjectModel.get('_type');//page
    var isComplete = contentObjectModel.get('_isComplete') ? 1 : 0;/* _isComplete: 0 initially */
    var children;

    switch (viewType) {
      case 'page':
        // If it's a page
        //available and non optional components
        children = contentObjectModel.findDescendantModels('components', {
          where: {
            _isAvailable: true,
            _isOptional: false
          }
        });

        //performing check again for all parents
        var availableChildren = filterAvailableChildren(children);
        //childrens where plp is active
        var components = getPageLevelProgressEnabledModels(availableChildren);

        //get completed non assessment components
        var nonAssessmentComponents = getNonAssessmentComponents(components);//_isPartOfAssessment
        completion.nonAssessmentTotal = nonAssessmentComponents.length;
        completion.nonAssessmentCompleted = getComponentsCompleted(nonAssessmentComponents).length;

        //get completed assessment components
        var assessmentComponents = getAssessmentComponents(components);//_isPartOfAssessment
        completion.assessmentTotal = assessmentComponents.length;
        completion.assessmentCompleted = getComponentsInteractionCompleted(assessmentComponents).length;

        // handle plp for assessment ie set if _excludeAssessments is false
        if (contentObjectModel.get('_pageLevelProgress')._excludeAssessments !== true) {
          completion.subProgressCompleted = contentObjectModel.get('_subProgressComplete') || 0;
          completion.subProgressTotal = contentObjectModel.get('_subProgressTotal') || 0;
        }

        // handle plp for assessment ie set if _excludeAssessments is false
        var showPageCompletionCourse = Adapt.course.get('_pageLevelProgress') && Adapt.course.get('_pageLevelProgress')._showPageCompletion !== false;
        var showPageCompletionPage = contentObjectModel.get('_pageLevelProgress') && contentObjectModel.get('_pageLevelProgress')._showPageCompletion !== false;

        //showPageCompletionCourse: _showPageCompletion at course level
        //showPageCompletionPage: _showPageCompletion at contentObjectModel level
        if (showPageCompletionCourse && showPageCompletionPage) {
          // optionally add one point extra for page completion to eliminate incomplete pages and full progress bars
          // if _showPageCompletion is true then the progress bar should also consider it so add 1 to nonAssessmentTotal
          completion.nonAssessmentCompleted += isComplete;
          completion.nonAssessmentTotal += 1;
        }

        break;
      case 'menu': case 'course':
        // If it's a sub-menu
        children = contentObjectModel.get('_children').models;
        children.forEach(function(contentObject) {
          var completionObject = calculateCompletion(contentObject);// handle for each children
          completion.subProgressCompleted += completionObject.subProgressCompleted || 0;
          completion.subProgressTotal += completionObject.subProgressTotal || 0;
          completion.nonAssessmentTotal += completionObject.nonAssessmentTotal;
          completion.nonAssessmentCompleted += completionObject.nonAssessmentCompleted;
          completion.assessmentTotal += completionObject.assessmentTotal;
          completion.assessmentCompleted += completionObject.assessmentCompleted;
        });
        break;
    }

    return completion;
  }

  function getNonAssessmentComponents(models) {
    return models.filter(function(model) {
      return !model.get('_isPartOfAssessment');
    });
  }

  function getAssessmentComponents(models) {
    return models.filter(function(model) {
      return model.get('_isPartOfAssessment');
    });
  }

  function getComponentsCompleted(models) {
    return models.filter(function(item) {
      return item.get('_isComplete');
    });
  }

  function getComponentsInteractionCompleted(models) {
    return models.filter(function(item) {
      return item.get('_isComplete');
    });
  }

  //Get only those models who were enabled for pageLevelProgress
    // input: model
    // will return true if plp is activated
  function getPageLevelProgressEnabledModels(models) {
    return models.filter(function(model) {
      var config = model.get('_pageLevelProgress');
      return config && config._isEnabled;
    });
  }

  function unavailableInHierarchy(parents) {
    if (!parents) return;
    // will return true if all elements are unavailable
    return parents.some(function(parent) {
      return !parent.get('_isAvailable');
    });
  }

    // input: pages with all childrens
    // will return available childrens
  function filterAvailableChildren(children) {
    var availableChildren = [];

    for (var i = 0, count = children.length; i < count; i++) {
      var parents = children[i].getAncestorModels();//will retrieve all parent nodes of children[i]
      if (unavailableInHierarchy(parents)) continue;//if all elements are unavailable then dont push
      availableChildren.push(children[i]);
    }

    return availableChildren;
  }

  return {
    calculateCompletion: calculateCompletion,
    calculatePercentageComplete: calculatePercentageComplete,
    getPageLevelProgressEnabledModels: getPageLevelProgressEnabledModels,
    filterAvailableChildren: filterAvailableChildren
  };

});
