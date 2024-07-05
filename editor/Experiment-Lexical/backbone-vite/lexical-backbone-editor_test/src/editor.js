// src/editor.js
import { createEditor, LexicalComposer, useLexicalComposerContext } from '@lexical/react';
import { $getRoot, $createParagraphNode, $getSelection, $isRangeSelection } from 'lexical';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

class LexicalEditor {
  constructor() {
    this.editor = createEditor({
      namespace: 'MyEditor',
      onError: (error) => console.error(error),
    });
  }

  init(container) {
    const editorElement = document.createElement('div');
    editorElement.contentEditable = true;
    editorElement.className = 'editor-input';
    container.appendChild(editorElement);

    this.editor.setRootElement(editorElement);

    this.editor.update(() => {
      const root = $getRoot();
      const paragraph = $createParagraphNode();
      root.append(paragraph);
    });

    this.editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          console.log('Editor content changed');
        }
      });
    });

    this.editor.registerCommand(
      'bold',
      () => {
        console.log('Bold command executed');
        return true;
      },
      0,
    );

    return this.editor;
  }

  executeCommand(command) {
    this.editor.dispatchCommand(command, undefined);
  }
}

export default LexicalEditor;
