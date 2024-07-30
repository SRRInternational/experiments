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
  // 'LexicalCodeHighlightPlugin',
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
  LexicalTablePlugin
  // LexicalCodeHighlightPlugin
) {
  var textAreaRender = Backbone.Form.editors.TextArea.prototype.render;

  Backbone.Form.editors.TextArea.prototype.render = function () {
    textAreaRender.call(this);

    _.defer(
      function () {
        var $textarea = this.$el;
        $textarea.replaceWith(
          '<div id="lexical-editor" contentEditable>cvdvsvsfv</div>'
        );
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
            // LexicalCodeHighlightPlugin(),
          ],
          initialEditorState: null,
        });
      }.bind(this)
    );

    return this;
  };

  var FormModel = Backbone.Model.extend({
    schema: {
      textarea: { type: "TextArea", title: "" }, // Remove the label by setting title to an empty string
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
