// src/main.ts

import "./styles.css";

import { registerDragonSupport } from "@lexical/dragon";
import { createEmptyHistoryState, registerHistory } from "@lexical/history";
import { HeadingNode, QuoteNode, registerRichText } from "@lexical/rich-text";
import { mergeRegister } from "@lexical/utils";
import { createEditor } from "lexical";

import prepopulatedRichText from "./prepopulatedRichText";
import { createToolbar } from "./toolbar";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Lexical Basic - Vanilla JS</h1>
    <div class="editor-wrapper">
      <div id="toolbar"></div>
      <div id="lexical-editor" contenteditable></div>
    </div>
    <h4>Editor state:</h4>
    <textarea id="lexical-state"></textarea>
  </div>
`;

const editorRef = document.getElementById("lexical-editor");
const toolbarRef = document.getElementById("toolbar");
const stateRef = document.getElementById(
  "lexical-state"
) as HTMLTextAreaElement;

const initialConfig = {
  namespace: "Vanilla JS Demo",
  nodes: [HeadingNode, QuoteNode],
  onError: (error: Error) => {
    throw error;
  },
  theme: {
    quote: "PlaygroundEditorTheme__quote",
  },
};

const editor = createEditor(initialConfig);
editor.setRootElement(editorRef);

// Create and append toolbar
const toolbar = createToolbar(editor);
if (toolbarRef) {
  toolbarRef.appendChild(toolbar);
}

// Registering Plugins
mergeRegister(
  registerRichText(editor),
  registerDragonSupport(editor),
  registerHistory(editor, createEmptyHistoryState(), 300)
);

editor.update(prepopulatedRichText, { tag: "history-merge" });

editor.registerUpdateListener(({ editorState }) => {
  stateRef.value = JSON.stringify(editorState.toJSON(), undefined, 2);
});
