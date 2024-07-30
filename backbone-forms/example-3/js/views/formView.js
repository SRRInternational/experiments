// define([
//   "jquery",
//   "underscore",
//   "backbone",
//   "backbone-forms",
//   "models/FormModel",
//   "lexical",
//   "LexicalComposer",
//   "LexicalContentEditable",
//   "LexicalHistoryPlugin",
//   "LexicalRichTextPlugin",
//   "LexicalListPlugin",
//   "LexicalMarkdownShortcutPlugin",
//   "LexicalAutoLinkPlugin",
//   "LexicalLinkPlugin",
//   "LexicalTablePlugin",
//   "LexicalCodeHighlightPlugin",
// ], function (
//   $,
//   _,
//   Backbone,
//   BackboneForms,
//   FormModel,
//   Lexical,
//   LexicalComposer,
//   LexicalContentEditable,
//   LexicalHistoryPlugin,
//   LexicalRichTextPlugin,
//   LexicalListPlugin,
//   LexicalMarkdownShortcutPlugin,
//   LexicalAutoLinkPlugin,
//   LexicalLinkPlugin,
//   LexicalTablePlugin,
//   LexicalCodeHighlightPlugin
// ) {
//   // Override the default TextArea render method
//   Backbone.Form.editors.TextArea.prototype.render = function () {
//     var textAreaRender = Backbone.Form.editors.TextArea.prototype.render;
//     textAreaRender.call(this);

//     _.delay(
//       function () {
//         this.editor = Lexical.createEditor({
//           namespace: "MyEditor",
//           onError: (error) => {
//             console.error(error);
//           },
//           nodes: [
//             // Add any custom nodes here
//           ],
//         });

//         const rootElement = document.createElement("div");
//         rootElement.className = "editor-container";
//         this.$el.replaceWith(rootElement);

//         this.editor.setRootElement(rootElement);

//         // Initialize plugins
//         LexicalHistoryPlugin(this.editor);
//         LexicalRichTextPlugin(this.editor);
//         LexicalListPlugin(this.editor);
//         LexicalMarkdownShortcutPlugin(this.editor);
//         LexicalAutoLinkPlugin(this.editor);
//         LexicalLinkPlugin(this.editor);
//         LexicalTablePlugin(this.editor);
//         LexicalCodeHighlightPlugin(this.editor);

//         this.editor.update(() => {
//           const root = this.editor.getRoot();
//           const paragraph = this.editor.createParagraphNode();
//           root.append(paragraph);
//         });
//       }.bind(this),
//       0
//     );

//     return this;
//   };

//   return Backbone.View.extend({
//     el: "#form-container",

//     initialize: function () {
//       this.model = new FormModel();
//       this.form = new Backbone.Form({
//         model: this.model,
//       });
//       this.render();
//     },

//     render: function () {
//       this.$el.html(this.form.render().el);
//       return this;
//     },
//   });
// });
