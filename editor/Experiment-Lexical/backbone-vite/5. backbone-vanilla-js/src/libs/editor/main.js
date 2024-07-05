/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import editor from "./index";

const editorRef = document.getElementById("lexical-editor");
editor(editorRef);


/* 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lexical Basic - Vanilla JS</title>
  </head>
  <body>
    <div id="app">
      <div>
        <h1>Lexical Basic - Vanilla JS</h1>
        <div class="editor-wrapper">
          <div id="lexical-editor" contenteditable></div>
        </div>
      </div>
    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>


*/