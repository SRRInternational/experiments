define(["core/js/adapt", "./PageLevelProgressIndicatorView"], function (
  Adapt,
  PageLevelProgressIndicatorView
) {
  Adapt.on("app:dataReady", function () {
    Adapt.on("menuView:render", function (view) {
      //Adapt.course.set({_isComplete: true})
      view.$el.append(new PageLevelProgressIndicatorView({
        model: Adapt.contentObjects.models[0],
        type: "menu-item",
      }).$el);
    });
  });
});
