require.config({
  paths: {
    jquery: "../node_modules/jquery/dist/jquery.min",
    underscore: "../node_modules/underscore/underscore-min",
    backbone: "../node_modules/backbone/backbone-min",
    // es6: "../node_modules/requirejs-babel/es6",
    lexical: "../node_modules/lexical/Lexical",
    "@lexical/rich-text": "../node_modules/@lexical/rich-text/LexicalRichText",
  },
  config: {
    //   es6: {
    //     modules: true,
    //   },
    // shim: {
    //   lexical: {
    //     deps: [],
    //     exports: "Lexical",
    //   },
    //   lexicalRichText: {
    //     deps: ["lexical"],
    //     exports: "LexicalRichText",
    //   },
    // },
  },
});

require(["views/EditorView"], function (EditorView) {
  var editorView = new EditorView({
    el: "#editor-container",
  });
  editorView.render();
});
