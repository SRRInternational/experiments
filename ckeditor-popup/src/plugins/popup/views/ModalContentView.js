import {
  View,
  FocusTracker,
  KeystrokeHandler,
  FocusCycler,
  submitHandler,
} from "ckeditor5";

export class ModalContentView extends View {
  constructor(locale, inputViews, actionButtons) {
    super(locale);

    this.focusTracker = new FocusTracker();
    this.keystrokes = new KeystrokeHandler();
    this.inputViews = inputViews;
    this.actionButtons = actionButtons;

    this.childViews = this.createCollection([
      ...this.inputViews,
      ...this.actionButtons,
    ]);

    this._focusCycler = new FocusCycler({
      focusables: this.childViews,
      focusTracker: this.focusTracker,
      keystrokeHandler: this.keystrokes,
      actions: {
        focusPrevious: "shift + tab",
        focusNext: "tab",
      },
    });

    this.setTemplate({
      tag: "form",
      attributes: {
        class: ["ck", "ck-modal-content"],
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        tabindex: "-1",
      },
      children: [
        {
          tag: "div",
          attributes: {
            id: "modal-title",
            class: ["ck", "ck-modal-header"],
            role: "heading",
          },
          children: [{ text: this.t("Modal Form") }],
        },
        {
          tag: "div",
          attributes: {
            class: ["ck", "ck-modal-body"],
          },
          children: this.inputViews,
        },
        {
          tag: "div",
          attributes: {
            class: ["ck", "ck-modal-buttons"],
            role: "group",
          },
          children: this.actionButtons,
        },
      ],
    });
  }

  render() {
    super.render();

    submitHandler({ view: this });

    this.childViews._items.forEach((view) => {
      this.focusTracker.add(view.element);
    });

    this.keystrokes.listenTo(this.element);

    // Handle Escape key
    this.keystrokes.set("esc", (evt, cancel) => {
      this.fire("cancel");
      cancel();
    });
  }

  focus() {
    this._focusCycler.focusFirst();
  }

  destroy() {
    super.destroy();
    this.focusTracker.destroy();
    this.keystrokes.destroy();
  }
}

export function createModalContentView(locale, inputViews, actionButtons) {
  return new ModalContentView(locale, inputViews, actionButtons);
}
