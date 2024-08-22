define(["backbone", "models/exampleModel", "views/exampleView"], function (
  Backbone,
  ExampleModel,
  ExampleView
) {
  var initialize = function () {
    var model = new ExampleModel();
    var view = new ExampleView();
    console.log("Model defaults:", model.toJSON());
  };

  return {
    initialize: initialize,
  };
});
