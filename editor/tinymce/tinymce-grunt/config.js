require.config({
  paths: {
    jquery: "js/libs/jquery.min",
    tinymce: "js/libs/tinymce/tinymce.min",
  },
  shim: {
    tinymce: {
      deps: [],
      exports: "tinymce/tinymce",
    },
  },
});

require(["js/main"]);
