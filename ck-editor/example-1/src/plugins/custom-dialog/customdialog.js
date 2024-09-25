import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import ContextualBalloon from "@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon";
import clickOutsideHandler from "@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler";
import View from "@ckeditor/ckeditor5-ui/src/view";

export default class CustomDialog extends Plugin {
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;
    const t = editor.t;

    // Get the balloon plugin
    this._balloon = editor.plugins.get(ContextualBalloon);

    // Create the dialog view
    this._createDialogView();

    // Register the custom button in the toolbar
    editor.ui.componentFactory.add("customDialog", (locale) => {
      const button = new ButtonView(locale);

      button.set({
        label: t("Custom Dialog"),
        icon: "<svg>...</svg>", // Add your custom icon SVG here
        tooltip: true,
      });

      // Listen for button clicks to open the dialog
      this.listenTo(button, "execute", () => {
        this._showDialog();
      });

      return button;
    });
  }

  // Create the dialog view
  _createDialogView() {
    const editor = this.editor;
    const t = editor.t;

    // Define a new view for the dialog
    this.dialogView = new View();

    this.dialogView.setTemplate({
      tag: "div",
      attributes: {
        class: ["ck", "ck-custom-dialog"],
      },
      children: [
        {
          text: "This is a custom dialog",
        },
        {
          tag: "button",
          attributes: {
            class: ["ck", "ck-button", "ck-custom-dialog-close"],
          },
          children: [{ text: t("Close") }],
        },
      ],
    });

    // Handle dialog visibility and outside click closing
    this.dialogView.on("render", () => {
      clickOutsideHandler({
        emitter: this.dialogView,
        activator: () => this._isDialogVisible,
        contextElements: [this.dialogView.element],
        callback: () => this._hideDialog(),
      });

      // Handle the close button click using the CKEditor event system
      const closeButton = this.dialogView.element.querySelector(
        ".ck-custom-dialog-close"
      );
      closeButton.addEventListener("click", () => this._hideDialog());
    });

    this.dialogView.render();
  }

  // Show the dialog
  _showDialog() {
    if (this._isDialogVisible) {
      return;
    }

    // Add the dialog to the balloon UI
    this._balloon.add({
      view: this.dialogView,
      position: this._getBalloonPositionData(),
    });

    this._isDialogVisible = true;
  }

  // Hide the dialog
  _hideDialog() {
    if (!this._isDialogVisible) {
      return;
    }

    // Remove the dialog from the balloon UI
    this._balloon.remove(this.dialogView);
    this._isDialogVisible = false;
  }

  // Positioning logic for the balloon
  _getBalloonPositionData() {
    const view = this.editor.editing.view;
    const viewDocument = view.document;
    const targetElement = viewDocument.selection.getFirstPosition().parent;

    return {
      target: this.editor.editing.view.domConverter.viewToDom(targetElement),
    };
  }
}
