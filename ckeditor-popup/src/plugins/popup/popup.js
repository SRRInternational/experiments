import {
  ButtonView,
  Plugin,
  View,
  FocusTracker,
  KeystrokeHandler,
  FocusCycler,
  Collection,
} from "ckeditor5";

export default class PopupPlugin extends Plugin {
  get requires() {
    return ["Dialog"];
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("popup", (locale) => {
      const button = new ButtonView(locale);

      button.set({
        label: "Show Popup",
        withText: true,
      });

      button.on("execute", () => {
        const dialog = editor.plugins.get("Dialog");

        const createInputView = (
          id,
          label,
          type = "text",
          placeholder = ""
        ) => {
          const inputView = new View(locale);
          inputView.setTemplate({
            tag: "div",
            attributes: {
              style: {
                display: "flex",
                flexDirection: "column",
                marginBottom: "var(--ck-spacing-medium)",
              },
            },
            children: [
              {
                tag: "label",
                attributes: {
                  for: id,
                  style: {
                    marginBottom: "var(--ck-spacing-small)",
                    fontWeight: "bold",
                  },
                },
                children: [label],
              },
              {
                tag: "input",
                attributes: {
                  id,
                  type,
                  class: "ck-input",
                  placeholder,
                  value: placeholder,
                  style: {
                    padding: "var(--ck-spacing-small)",
                    border: "1px solid var(--ck-color-input-border)",
                    borderRadius: "var(--ck-border-radius)",
                  },
                },
              },
            ],
          });

          return inputView;
        };

        const input1View = createInputView("popup-input-1", "Input 1");
        const input2View = createInputView("popup-input-2", "Input 2");

        // Create content view
        const contentView = new View(locale);
        contentView.setTemplate({
          tag: "div",
          attributes: {
            style: {
              padding: "var(--ck-spacing-large)",
              whiteSpace: "initial",
              width: "100%",
              maxWidth: "500px",
            },
            tabindex: -1,
          },
          children: [input1View, input2View],
        });

        contentView.on("render", () => {
          // Set up focus management
          const focusTracker = new FocusTracker();
          const keystrokeHandler = new KeystrokeHandler();

          // Create a collection of focusable elements
          const focusables = new Collection();
          focusables.add(input1View);
          focusables.add(input2View);

          // Create focus cycler
          const focusCycler = new FocusCycler({
            focusables,
            focusTracker,
            keystrokeHandler,
            actions: {
              focusNext: "tab",
              focusPrevious: "shift+tab",
            },
          });

          // Add elements to focus tracker
          focusTracker.add(input1View.element);
          focusTracker.add(input2View.element);

          // Listen to keystrokes on the content view
          keystrokeHandler.listenTo(contentView.element);
        });

        // Show dialog
        dialog.show({
          isModal: true,
          title: "Modal with Inputs",
          content: contentView,
          actionButtons: [
            {
              label: "OK",
              class: "ck-button-action",
              withText: true,
              onExecute: () => {
                // Retrieve input values
                const input1Value =
                  input1View.element.querySelector("input").value;
                const input2Value =
                  input2View.element.querySelector("input").value;

                // Log or process input values
                console.log("Input 1:", input1Value);
                console.log("Input 2:", input2Value);

                // Close the dialog
                dialog.hide();
              },
            },
            {
              label: "Cancel",
              withText: true,
              onExecute: () => {
                dialog.hide();
              },
            },
          ],
          onShow() {
            // Focus the first input when dialog opens
            input1View.element.querySelector("input").focus();
          },
          onHide() {
            // Clean up focus tracker and other resources
            focusTracker.destroy();
            keystrokeHandler.destroy();
          },
        });
      });

      return button;
    });
  }
}
