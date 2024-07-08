requirejs.config({
  paths: {
    jquery: "../node_modules/jquery/dist/jquery.min",
  },
});

requirejs(["jquery"], function ($) {
  $(document).ready(function () {
    const { createEditor, $getRoot, $createParagraphNode, $createTextNode } =
      lexical;
    const { $createRichTextNode, $isRichTextNode } = LexicalRichText;
    const { $createLinkNode, $isLinkNode } = LexicalRichText;

    const editor = createEditor({
      namespace: "MyEditor",
      onError: (error) => {
        console.error(error);
      },
      nodes: [
        $createParagraphNode,
        $createTextNode,
        $createRichTextNode,
        $createLinkNode,
      ],
    });

    editor.setRootElement(document.getElementById("editor"));

    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const root = $getRoot();
        console.log(root);
      });
    });

    editor.update(() => {
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

    // You can add more configurations and event handlers here
  });
});
