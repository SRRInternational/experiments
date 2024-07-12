define(["lexical"], function (Lexical) {
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

  function createToolbar(editor) {
    const toolbar = document.createElement("div");
    toolbar.className = "toolbar";
    const buttons = [
      createButton("Format Bold", "bold", Lexical.FORMAT_TEXT_COMMAND, "bold"),
      createButton(
        "Format Italics",
        "italic",
        Lexical.FORMAT_TEXT_COMMAND,
        "italic"
      ),
      createButton(
        "Format Underline",
        "underline",
        Lexical.FORMAT_TEXT_COMMAND,
        "underline"
      ),
    ];
    buttons.forEach(({ button, updateState }) => {
      button.addEventListener("click", () => {
        editor.dispatchCommand(
          Lexical.FORMAT_TEXT_COMMAND,
          button.getAttribute("data-command-value")
        );
      });
      toolbar.appendChild(button);
    });

    const updateToolbar = () => {
      const selection = Lexical.$getSelection();
      if (Lexical.$isRangeSelection(selection)) {
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
      Lexical.SELECTION_CHANGE_COMMAND,
      () => {
        updateToolbar();
        return false;
      },
      LowPriority
    );

    return toolbar;
  }

  return {
    createToolbar: createToolbar,
  };
});
