// src/toolbar.ts

import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";

const LowPriority = 1;


function createButton(name, icon, command, commandValue) {
  const button = document.createElement("button");
  button.className = "toolbar-item spaced";
  button.setAttribute("aria-label", name);
  button.setAttribute("data-command", command.toString());
  button.setAttribute("data-command-value", commandValue);

  const iconElement = document.createElement("i");
  iconElement.className = `format ${icon}`;
  button.appendChild(iconElement);

  const updateState = (state) => {
    button.classList.toggle("active", state);
  };

  return { button, updateState };
}

export default function createToolbar(editor) {
  const toolbar = document.createElement("div");
  toolbar.className = "toolbar";

  const buttons = [
    createButton("Format Bold", "bold", FORMAT_TEXT_COMMAND, "bold"),
    createButton("Format Italics", "italic", FORMAT_TEXT_COMMAND, "italic"),
    createButton(
      "Format Underline",
      "underline",
      FORMAT_TEXT_COMMAND,
      "underline"
    ),
  ];

  buttons.forEach(({ button, updateState }) => {
    button.addEventListener("click", () => {
      editor.dispatchCommand(
        FORMAT_TEXT_COMMAND,
        button.getAttribute("data-command-value")
      );
    });
    toolbar.appendChild(button);
  });

  const updateToolbar = () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      buttons.forEach(({ button, updateState }) => {
        if (updateState) {
          const format = button.getAttribute("data-command-value");
          updateState(selection.hasFormat(format));
        }
      });
    }
  };

  editor.registerUpdateListener(({ editorState }) => {
    editorState.read(() => {
      updateToolbar();
    });
  });

  editor.registerCommand(
    SELECTION_CHANGE_COMMAND,
    () => {
      updateToolbar();
      return false;
    },
    LowPriority
  );

  return toolbar;
}
