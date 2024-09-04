require.config({
  baseUrl: "js",
  paths: {
    underscore: "lib/underscore",
    backbone: "lib/backbone",
    jquery: "lib/jquery", // Add jQuery if needed
  },
  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
    },
  },
});

require(["app"], function (app) {
  app.initialize();
});
