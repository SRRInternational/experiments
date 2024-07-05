// src/components/LexicalEditor.js
import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

const theme = {};

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError(error) {
    console.error(error);
  },
};

function MyEditor() {
  const onChange = (editorState) => {
    editorState.read(() => {
      const json = editorState.toJSON();
      console.log(json);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
        placeholder={<div className="editor-placeholder">Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
    </LexicalComposer>
  );
}

export default MyEditor;
