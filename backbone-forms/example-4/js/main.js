require.config({
  paths: {
    jquery: "https://code.jquery.com/jquery-3.6.0.min",
    underscore:
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min",
    backbone:
      "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min",
    "backbone-forms": "./lib/backboneForm/backbone-form",
    lexical: "./lib/lexical/lexical.amd",
    LexicalComposer: "./lib/lexical/react/LexicalComposer",
    LexicalContentEditable: "./lib/lexical/react/LexicalContentEditable",
    LexicalHistoryPlugin: "./lib/lexical/react/LexicalHistoryPlugin",
    LexicalRichTextPlugin: "./lib/lexical/react/LexicalRichTextPlugin",
    LexicalListPlugin: "./lib/lexical/react/LexicalListPlugin",
    LexicalMarkdownShortcutPlugin:
      "./lib/lexical/react/LexicalMarkdownShortcutPlugin",
    LexicalAutoLinkPlugin: "./lib/lexical/react/LexicalAutoLinkPlugin",
    LexicalLinkPlugin: "./lib/lexical/react/LexicalLinkPlugin",
    LexicalTablePlugin: "./lib/lexical/react/LexicalTablePlugin",
    LexicalCodeHighlightPlugin:
      "./lib/lexical/react/LexicalCodeHighlightPlugin",
  },
  shim: {
    underscore: {
      exports: "_",
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
    },
    "backbone-forms": {
      deps: ["backbone"],
    },
  },
});

require(["app"], function (App) {
  App.initialize();
});
