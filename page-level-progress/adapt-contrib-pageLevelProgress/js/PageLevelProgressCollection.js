define([
  './completionCalculations'
], function(completionCalculations) {

  var PageLevelProgressCollection = Backbone.Collection.extend({

    initialize: function(models, options) {// on init: get model
      if (!options || !options.pageModel) return;
      this._pageModel = options.pageModel;
      this.repopulate();
    },

    repopulate: function() {//
      this.reset();
      if (!this._pageModel) return;

      var allDescendants = this._pageModel.getAllDescendantModels(true);
      var currentPageItems = allDescendants.filter(function(item) {
        //if (item.get("_blockBranching") && item.get("_blockBranching")._isEnabled) return true;
        return item.get('_isAvailable') === true;
      });
      var availableItems = completionCalculations.filterAvailableChildren(currentPageItems);
      var enabledProgressItems = completionCalculations.getPageLevelProgressEnabledModels(availableItems);

      this.add(enabledProgressItems);
    }

  });

  return PageLevelProgressCollection;

});
