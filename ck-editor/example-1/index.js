import {
  ClassicEditor,
  Autoformat,
  Bold,
  Italic,
  Underline,
  BlockQuote,
  Base64UploadAdapter,
  CloudServices,
  CKBox,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
  Indent,
  IndentBlock,
  Link,
  List,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromOffice,
  Table,
  TableColumnResize,
  TableToolbar,
  TextTransformation,
} from "ckeditor5";

import CustomDialog from "./src/plugins/custom-dialog/customdialog";
import "./src/plugins/custom-dialog/customdialog.css";

import "ckeditor5/ckeditor5.css";

ClassicEditor.create(
  document.querySelector("#cke5-user-interface-classic-demo"),
  {
    plugins: [
      Autoformat,
      BlockQuote,
      Bold,
      Heading,
      Image,
      ImageCaption,
      ImageResize,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      Base64UploadAdapter,
      Indent,
      IndentBlock,
      Italic,
      Link,
      List,
      MediaEmbed,
      Mention,
      Paragraph,
      PasteFromOffice,
      Table,
      TableColumnResize,
      TableToolbar,
      TextTransformation,
      Underline,
      CustomDialog,
    ],
    toolbar: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "|",
      "link",
      "uploadImage",
      "ckbox",
      "insertTable",
      "blockQuote",
      "mediaEmbed",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "CustomDialog",
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
      ],
    },
    image: {
      resizeOptions: [
        {
          name: "resizeImage:original",
          label: "Default image width",
          value: null,
        },
        {
          name: "resizeImage:50",
          label: "50% page width",
          value: "50",
        },
        {
          name: "resizeImage:75",
          label: "75% page width",
          value: "75",
        },
      ],
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
    },
  }
)
  .then((editor) => {
    window.editor = editor;
  })
  .catch((error) => {
    console.error(error.stack);
  });
