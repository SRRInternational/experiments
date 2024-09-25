// import { Plugin } from "ckeditor5";
// import { ButtonView } from "ckeditor5";
// import { View } from "ckeditor5";

// export default class CustomDialog extends Plugin {
//   init() {
//     const editor = this.editor;
//     const t = editor.t;

//     editor.commands.add("customDialog", {
//       execute: () => {
//         console.log("CustomDialog command executed");
//         this._showDialog();
//       },
//     });

//     editor.ui.componentFactory.add("customDialog", (locale) => {
//       const button = new ButtonView(locale);

//       button.set({
//         label: t("Custom Dialog"),
//         icon: "<svg>...</svg>", // Add your custom icon here
//         tooltip: true,
//       });

//       button.on("execute", () => {
//         console.log("CustomDialog button clicked");
//         editor.execute("customDialog");
//       });

//       return button;
//     });

//     this.dialogView = this._createDialogView();
//     console.log("CustomDialog plugin initialized");
//   }

//   _createDialogView() {
//     const dialogView = new View();

//     dialogView.setTemplate({
//       tag: "div",
//       attributes: {
//         class: ["ck", "ck-custom-dialog"],
//         style:
//           "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid black; z-index: 9999;",
//       },
//       children: [
//         {
//           text: "This is a custom dialog",
//         },
//         {
//           tag: "button",
//           attributes: {
//             class: ["ck", "ck-button", "ck-custom-dialog-close"],
//             style: "margin-top: 10px;",
//           },
//           children: [
//             {
//               text: "Close",
//             },
//           ],
//         },
//       ],
//     });

//     dialogView.render();

//     const closeButton = dialogView.element.querySelector(
//       ".ck-custom-dialog-close"
//     );
//     closeButton.addEventListener("click", () => this._hideDialog());

//     return dialogView;
//   }

//   _showDialog() {
//     console.log("Attempting to show dialog");
//     document.body.appendChild(this.dialogView.element);
//     console.log("Dialog added to body");
//   }

//   _hideDialog() {
//     if (this.dialogView.element.parentNode) {
//       this.dialogView.element.parentNode.removeChild(this.dialogView.element);
//     }
//   }
// }
