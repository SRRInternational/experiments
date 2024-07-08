define(["jquery", "lexical"], function ($, Lexical) {
  class Editor {
    constructor(selector) {
      this.selector = selector;
    }

    init() {
      const { createEditor } = Lexical;

      this.editor = createEditor({
        namespace: "MyEditor",
        onError: (error) => {
          console.error(error);
        },
      });

      this.editor.setRootElement($(this.selector)[0]);

      this.editor.update(() => {
        const root = this.editor.getRoot();
        const paragraph = this.editor.createParagraphNode();
        const text = this.editor.createTextNode(
          "Welcome to the Lexical Editor!"
        );
        paragraph.append(text);
        root.append(paragraph);
      });

      // Make the editor editable
      $(this.selector).attr("contenteditable", "true");
    }
  }

  return Editor;
});
