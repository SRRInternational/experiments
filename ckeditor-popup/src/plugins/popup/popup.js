import { ButtonView, Plugin, Dialog, View } from "ckeditor5";
import { createInputView } from "./views/InputView";
import { createModalContentView } from "./views/ModalContentView";

export default class PopupPlugin extends Plugin {
  get requires() {
    return [Dialog];
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("popup", (locale) => {
      const button = this._createButton(locale);
      this._attachButtonListener(button, locale);
      return button;
    });
  }

  _createButton(locale) {
    const button = new ButtonView(locale);
    button.set({
      label: "Show Popup",
      withText: true,
      tooltip: true,
    });
    return button;
  }

  _attachButtonListener(button, locale) {
    button.on("execute", () => {
      const dialog = this.editor.plugins.get("Dialog");

      const input1View = createInputView(locale, {
        id: "popup-input-1",
        label: "Input 1",
        type: "text",
      });

      const input2View = createInputView(locale, {
        id: "popup-input-2",
        label: "Input 2",
        type: "text",
      });

      const okButton = new ButtonView(locale);
      okButton.set({
        label: "OK",
        class: "ck-button-action",
        withText: true,
        tabindex: "0",
      });

      const cancelButton = new ButtonView(locale);
      cancelButton.set({
        label: "Cancel",
        withText: true,
        tabindex: "0",
      });

      okButton.on("execute", () => {
        const input1Value = input1View.element.querySelector("input").value;
        const input2Value = input2View.element.querySelector("input").value;
        console.log("Input 1:", input1Value);
        console.log("Input 2:", input2Value);
        dialog.hide();
      });

      cancelButton.on("execute", () => {
        dialog.hide();
      });

      const contentView = createModalContentView(
        locale,
        [input1View, input2View],
        [okButton, cancelButton]
      );

      dialog.show({
        isModal: true,
        title: "Modal with Inputs",
        content: contentView,
        actionButtons: [],
        onHide: () => {
          button.isOn = false;
        },
      });

      button.isOn = true;
    });
  }
}
