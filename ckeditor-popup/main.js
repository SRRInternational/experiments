import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Italic,
  Paragraph,
  List,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import popupPlugin from "./src/plugins/popup/popup";
ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, popupPlugin],
  toolbar: [
    "heading",
    "bold",
    "italic",
    "numberedList",
    "bulletedList",
    "popup",
  ],
})
  .then((editor) => {
    console.log("Editor was initialized", editor);
  })
  .catch((error) => {
    console.error(error.stack);
  });
