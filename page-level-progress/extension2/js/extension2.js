define(["core/js/adapt", "./PageLevelProgressCollection"], function (
  Adapt,
  PageLevelProgressCollection
) {
  Adapt.on("app:dataReady", function () {
    Adapt.on("router:page", function (pageModel) {
      /* 
      The first argument (null in this case) typically represents the initial data or items in the 
      collection. Passing null suggests that you want to create an empty collection initially,
      without any pre-existing data.
      */
      var collection = new PageLevelProgressCollection(null, {//TODO: why 1st argv is null
        pageModel: pageModel,
      });
      //collection of article, block, compoennt where _isAvailable is true
      Adapt.once("pageView:ready", function (pageView) {
        pageView.$el.append("Total components: " + collection.length);
      });
    });
  });
});
