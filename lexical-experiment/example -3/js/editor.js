define(["jquery", "lexical", "lexical-rich-text"], function (
  $,
  Lexical,
  LexicalRichText
) {
  const {
    createEditor,
    $getRoot,
    $createParagraphNode,
    $createTextNode,
    COMMAND_PRIORITY_NORMAL,
    FORMAT_TEXT_COMMAND,
  } = Lexical;

  const { $createRichTextNode, $isRichTextNode } = LexicalRichText;

  class Editor {
    constructor(selector) {
      this.selector = selector;
      this.editor = null;
    }

    init() {
      this.editor = createEditor({
        namespace: "MyEditor",
        onError: (error) => {
          console.error(error);
        },
        nodes: [LexicalRichText],
      });

      this.editor.setRootElement($(this.selector)[0]);

      this.editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          // You can perform actions on each update here
        });
      });

      this.editor.update(() => {
        const root = $getRoot();
        if (root.getFirstChild() === null) {
          const paragraph = $createParagraphNode();
          const text = $createTextNode(
            "Welcome to the Lexical Rich Text Editor!"
          );
          paragraph.append(text);
          root.append(paragraph);
        }
      });
    }

    toggleFormat(format) {
      this.editor.update(() => {
        const selection = this.editor.getEditorState()._selection;
        if (selection) {
          this.editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
        }
      });
    }
  }

  return Editor;
});
