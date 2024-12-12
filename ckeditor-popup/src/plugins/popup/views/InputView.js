import { View, FocusTracker, KeystrokeHandler } from "ckeditor5";

export class InputView extends View {
  constructor(locale, { id, label, type = "text", placeholder = "" }) {
    super(locale);

    this.focusTracker = new FocusTracker();
    this.keystrokes = new KeystrokeHandler();

    this.setTemplate({
      tag: "div",
      attributes: {
        class: ["ck", "ck-input-wrapper"],
        role: "group",
      },
      children: [
        {
          tag: "label",
          attributes: {
            for: id,
            class: ["ck", "ck-input-label"],
          },
          children: [label],
        },
        {
          tag: "input",
          attributes: {
            id,
            type,
            class: ["ck", "ck-input", "ck-focusable"],
            placeholder,
            "aria-label": label,
            "aria-required": "true",
            tabindex: "0",
          },
        },
      ],
    });
  }

  render() {
    super.render();

    const input = this.element.querySelector("input");
    this.focusTracker.add(input);
    this.keystrokes.listenTo(input);
  }

  focus() {
    this.element.querySelector("input").focus();
  }

  destroy() {
    super.destroy();
    this.focusTracker.destroy();
    this.keystrokes.destroy();
  }
}

export function createInputView(locale, config) {
  return new InputView(locale, config);
}
