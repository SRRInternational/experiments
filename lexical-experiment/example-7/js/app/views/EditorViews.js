define(["jquery", "backbone", "lexical", "app/toolbar"], function (
  $,
  Backbone,
  Lexical,
  Toolbar
) {
  return Backbone.View.extend({
    el: "#editor-container",

    initialize: function () {
      this.editor = null;
      this.render();
    },

    render: function () {
      const config = {
        namespace: "MyEditor",
        theme: {
          ltr: "ltr",
          rtl: "rtl",
          placeholder: "editor-placeholder",
          paragraph: "editor-paragraph",
        },
      };

      this.editor = Lexical.createEditor(config);

      // Create toolbar
      const toolbar = Toolbar.createToolbar(this.editor);
      this.$el.append(toolbar);

      // Create editor element
      const editorElement = $('<div id="editor"></div>');
      this.$el.append(editorElement);

      this.editor.setRootElement(editorElement[0]);

      this.editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const content = Lexical.$getRoot().getTextContent();
          this.model.set("content", content);
        });
      });

      this.editor.update(() => {
        const root = Lexical.$getRoot();
        const paragraph = Lexical.$createParagraphNode();
        const text = Lexical.$createTextNode("Welcome to the editor!");
        paragraph.append(text);
        root.append(paragraph);
      });
    },
  });
});
