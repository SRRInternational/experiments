define([
  "backbone",
  "underscore",
  "jquery",
  "models/exampleModel",
  "views/exampleView",
], function (Backbone, _, $, ExampleModel, ExampleView) {
  var initialize = function () {
    var model = new ExampleModel();
    var view = new ExampleView();
    console.log("Model defaults:", model.toJSON());

    // Example of using Underscore.js
    console.log("Underscore.js version:", _.VERSION);
    console.log(
      "Underscore.js _.map example:",
      _.map([1, 2, 3], function (num) {
        return num * 3;
      })
    );
  };

  return {
    initialize: initialize,
  };
});
