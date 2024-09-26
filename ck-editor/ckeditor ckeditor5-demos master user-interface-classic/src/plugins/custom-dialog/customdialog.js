import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class LogButtonPlugin extends Plugin {
  init() {
    const editor = this.editor;

    // Add a new button to the editor
    editor.ui.componentFactory.add("logButton", (locale) => {
      // Create a button view
      const view = new ButtonView(locale);

      // Set button properties
      view.set({
        label: "Log to Console",
        icon: "<svg>...</svg>", // Optionally, add an icon here
        tooltip: true,
      });

      // Define what happens when the button is clicked
      view.on("execute", () => {
        console.log("Button was clicked!");
      });

      return view;
    });
  }
}
