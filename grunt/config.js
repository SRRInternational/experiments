require.config({
  paths: {
    jquery: "js/libs/jquery.min",
    jqueryUI: "js/libs/jquery-ui.min",
    multiselect: "js/libs/jquery.multiselect",
  },
  shim: {
    multiselect: {
      deps: ["jquery", "jqueryUI"],
      exports: "multiselect",
    },
  },
});

require(["js/main"]);
