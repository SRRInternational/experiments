requirejs.config({
  paths: {
    app: "app",
    jquery: "../node_modules/jquery/dist/jquery.min",
    underscore: "../node_modules/underscore/underscore-min",
    backbone: "../node_modules/backbone/backbone-min",
    lexical: "./lib/lexical.amd",
  },
  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
    },
  },
});

requirejs(["app/main"]);
