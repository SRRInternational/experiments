define([
  './completionCalculations'
], function(completionCalculations) {

  var PageLevelProgressCollection = Backbone.Collection.extend({

    initialize: function(models, options) {// on init: store model
      if (!options || !options.pageModel) return;
      this._pageModel = options.pageModel;
      this.repopulate();
    },

    repopulate: function() {
      this.reset();
      if (!this._pageModel) return;
      //retrieve all childrens
      var allDescendants = this._pageModel.getAllDescendantModels(true);
      /* 
      if true: parent element will appear first
      else component will appear first

      eg true:{
        article
        block
        component
        block
        component
      }

      eg false:{
        component
        block
        component
        block
        article
      }
      */
      //retrieve all available childrens
      var currentPageItems = allDescendants.filter(function(item) {
        //if (item.get("_blockBranching") && item.get("_blockBranching")._isEnabled) return true;
        return item.get('_isAvailable') === true;
      });
      //filter available childrens
      var availableItems = completionCalculations.filterAvailableChildren(currentPageItems);
      //filter: if plp is activated
      //getPageLevelProgressEnabledModels will return elements where plp is activated
      var enabledProgressItems = completionCalculations.getPageLevelProgressEnabledModels(availableItems);

      this.add(enabledProgressItems);
    }

  });

  return PageLevelProgressCollection;

});
