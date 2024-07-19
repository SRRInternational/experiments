requirejs.config({
  paths: {
    app: "app",
    jquery: "../node_modules/jquery/dist/jquery.min",
    underscore: "../node_modules/underscore/underscore-min",
    backbone: "../node_modules/backbone/backbone-min",
    lexical: "./lib/lexical.amd",
    LexicalComposer: "./lib/react/LexicalComposer",
    LexicalContentEditable: "./lib/react/LexicalContentEditable",
    LexicalHistoryPlugin: "./lib/react/LexicalHistoryPlugin",
    LexicalRichTextPlugin: "./lib/react/LexicalRichTextPlugin",
    LexicalListPlugin: "./lib/react/LexicalListPlugin",
    LexicalMarkdownShortcutPlugin: "./lib/react/LexicalMarkdownShortcutPlugin",
    LexicalAutoLinkPlugin: "./lib/react/LexicalAutoLinkPlugin",
    LexicalLinkPlugin: "./lib/react/LexicalLinkPlugin",
    LexicalTablePlugin: "./lib/react/LexicalTablePlugin",
    LexicalCodeHighlightPlugin: "./lib/react/LexicalCodeHighlightPlugin",
  },
  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
    },
  },
});

requirejs(["app/main"]);
