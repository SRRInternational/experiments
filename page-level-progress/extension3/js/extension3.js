define([
  "core/js/adapt",
  "./collection/PageLevelProgressCollection",
  "./PageLevelProgressNavigationView",
], function (
  Adapt,
  PageLevelProgressCollection,
  PageLevelProgressNavigationView
) {
  Adapt.on("app:dataReady", function () {
    Adapt.listenTo(Adapt, {
      "router:page": function (pageModel) {
        const view = new PageLevelProgressNavigationView({
          model: pageModel,
          collection: new PageLevelProgressCollection(null, {
            pageModel: pageModel,
          }),
        }).$el;
        view.css({ background: "red" });
        $(".nav__drawer-btn").after(view);
      },
    });
  });
});
