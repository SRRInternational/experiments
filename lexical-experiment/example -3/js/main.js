requirejs.config({
  paths: {
    jquery: "../node_modules/jquery/dist/jquery.min",
    lexical: "../node_modules/lexical/Lexical.mjs",
    "lexical-rich-text": "../node_modules/@lexical/rich-text/LexicalRichText",
    editor: "editor",
  },
});

requirejs(["jquery", "editor"], function ($, Editor) {
  $(document).ready(function () {
    const editor = new Editor("#editor");
    editor.init();

    $("#bold").on("click", function () {
      editor.toggleFormat("bold");
    });

    $("#italic").on("click", function () {
      editor.toggleFormat("italic");
    });

    $("#underline").on("click", function () {
      editor.toggleFormat("underline");
    });
  });
});
