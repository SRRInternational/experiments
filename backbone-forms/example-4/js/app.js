define([
  "jquery",
  "underscore",
  "backbone",
  "backbone-forms",
  "lexical",
  "LexicalComposer",
  "LexicalContentEditable",
  "LexicalHistoryPlugin",
  "LexicalRichTextPlugin",
  "LexicalListPlugin",
  "LexicalMarkdownShortcutPlugin",
  "LexicalAutoLinkPlugin",
  "LexicalLinkPlugin",
  "LexicalTablePlugin",
  // "LexicalCodeHighlightPlugin",
], function (
  $,
  _,
  Backbone,
  BackboneForms,
  Lexical,
  LexicalComposer,
  LexicalContentEditable,
  LexicalHistoryPlugin,
  LexicalRichTextPlugin,
  LexicalListPlugin,
  LexicalMarkdownShortcutPlugin,
  LexicalAutoLinkPlugin,
  LexicalLinkPlugin,
  LexicalTablePlugin,
  // LexicalCodeHighlightPlugin
) {
  // Ensure Backbone.Form is loaded correctly
  // if (!Backbone.Form) {
  //   console.error(
  //     "Backbone.Form is not defined. Make sure backbone-forms is loaded correctly."
  //   );
  //   return;
  // }

  var textAreaRender = Backbone.Form.editors.TextArea.prototype.render;

  Backbone.Form.editors.TextArea.prototype.render = function () {
    textAreaRender.call(this);

    _.defer(
      function () {
        var $textarea = this.$el;
        $textarea.replaceWith('<div id="lexical-editor">cvdvsvsfv</div>');
        new LexicalComposer({
          element: document.getElementById("lexical-editor"),
          plugins: [
            LexicalHistoryPlugin(),
            LexicalRichTextPlugin(),
            LexicalListPlugin(),
            LexicalMarkdownShortcutPlugin(),
            LexicalAutoLinkPlugin(),
            LexicalLinkPlugin(),
            LexicalTablePlugin(),
            LexicalCodeHighlightPlugin(),
          ],
          initialEditorState: null,
        });
      }.bind(this)
    );

    return this;
  };

  var FormModel = Backbone.Model.extend({
    schema: {
      textarea: "TextArea",
    },
  });

  var initialize = function () {
    var model = new FormModel();
    var form = new Backbone.Form({
      model: model,
    }).render();

    $("#form-container").html(form.el);
  };

  return {
    initialize: initialize,
  };
});
