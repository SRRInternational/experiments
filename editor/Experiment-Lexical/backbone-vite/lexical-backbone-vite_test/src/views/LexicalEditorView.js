// src/views/LexicalEditorView.js
import Backbone from 'backbone';
import { createEditor, LexicalComposer } from '@lexical/react';
import { $getRoot, $createParagraphNode, $getSelection, $isRangeSelection } from 'lexical';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

const theme = {};

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError(error) {
    console.error(error);
  },
};

class LexicalEditorView extends Backbone.View {
  initialize() {
    this.editor = createEditor(initialConfig);
  }

  render() {
    this.$el.html(`
      <div class="editor-container">
        <div class="toolbar-container"></div>
        <div class="lexical-editor"></div>
      </div>
    `);

    // Initialize Lexical editor within .lexical-editor element
    const lexicalContainer = this.$('.lexical-editor')[0];
    const lexicalComposer = new LexicalComposer({ initialConfig });
    lexicalComposer.mount(lexicalContainer);

    // Register plugins for Lexical editor
    lexicalComposer.registerPlugin(new RichTextPlugin());
    lexicalComposer.registerPlugin(new HistoryPlugin());
    lexicalComposer.registerPlugin(new OnChangePlugin());

    // Set up toolbar (assuming ToolbarView is already set up)
    const toolbarButtons = [
      { label: 'Bold', command: 'bold' },
      { label: 'Italic', command: 'italic' },
      { label: 'Underline', command: 'underline' },
    ];

    const toolbarView = new ToolbarView({ buttons: toolbarButtons });
    this.$('.toolbar-container').html(toolbarView.render().el);

    // Handle toolbar commands
    toolbarView.on('command:execute', (command) => {
      lexicalComposer.executeCommand(command);
    });

    return this;
  }
}

export default LexicalEditorView;
