/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "./css/styles.css";

import { registerDragonSupport } from "@lexical/dragon";
import { createEmptyHistoryState, registerHistory } from "@lexical/history";
import { HeadingNode, QuoteNode, registerRichText } from "@lexical/rich-text";
import { mergeRegister } from "@lexical/utils";
import { createEditor } from "lexical";
import createToolbar from "./toolbar";
import $ from "jquery";

function editor(el) {
  const initialConfig = {
    namespace: "Vanilla JS Demo",
    nodes: [HeadingNode, QuoteNode],
    onError: console.log,
    theme: {
      quote: "PlaygroundEditorTheme__quote",
    },
  };
  const editor = createEditor(initialConfig);
  
  mergeRegister(
    registerRichText(editor),
    registerDragonSupport(editor),
    registerHistory(editor, createEmptyHistoryState(), 300)
  );
  const toolbarRef = $(".toolbar");
  toolbarRef.html(createToolbar(editor));
  editor.setRootElement(el[0]);
}

export default editor;
