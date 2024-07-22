define([
  "jquery",
  "backbone",
  "lexical",
  "LexicalComposer",
  "LexicalContentEditable",
  "LexicalHistoryPlugin",
  "LexicalRichTextPlugin",
  "LexicalListPlugin",
  "LexicalMarkdownShortcutPlugin",
  "LexicalAutoLinkPlugin",
  "LexicalLinkPlugin",
  "LexicalTablePlugin",
], function (
  $,
  Backbone,
  lexical,
  LexicalComposer,
  LexicalContentEditable,
  LexicalHistoryPlugin,
  LexicalRichTextPlugin,
  LexicalListPlugin,
  LexicalMarkdownShortcutPlugin,
  LexicalAutoLinkPlugin,
  LexicalLinkPlugin,
  LexicalTablePlugin
) {
  return Backbone.View.extend({
    el: "#editor-container",
    events: {
      "click #bold-button": "makeBold",
      "click #italic-button": "makeItalic",
      "click #underline-button": "makeUnderline",
      "click #strikethrough-button": "makeStrikethrough",
      "click #subscript-button": "makeSubscript",
      "click #superscript-button": "makeSuperscript",
      "click #left-align-button": "leftAlign",
      "click #center-align-button": "centerAlign",
      "click #right-align-button": "rightAlign",
      "click #justify-align-button": "justifyAlign",
      "click #code-button": "makeCode",
      "click #quote-button": "makeQuote",
      "click #bullet-list-button": "makeBulletList",
      "click #numbered-list-button": "makeNumberedList",
      "click #checklist-button": "makeChecklist",
      "click #link-button": "makeLink",
      "click #image-button": "insertImage",
      "click #table-button": "insertTable",
      "click #horizontal-rule-button": "insertHorizontalRule",
      "click #emoticon-button": "insertEmoticon",
      "click #hashtag-button": "insertHashtag",
      "click #collapsible-button": "insertCollapsible",
      "change #font-family-select": "changeFontFamily",
      "change #font-size-select": "changeFontSize",
      "click #text-color-button": "changeTextColor",
      "click #background-color-button": "changeBackgroundColor",
      "click #clear-formatting-button": "clearFormatting",
      "click #undo-button": "undo",
      "click #redo-button": "redo",
      "click #h1-button": "makeH1",
      "click #h2-button": "makeH2",
      "click #h3-button": "makeH3",
      "click #h4-button": "makeH4",
      "click #h5-button": "makeH5",
      "click #h6-button": "makeH6",
    },
    initialize: function () {
      this.editor = lexical.createEditor({
        nodes: [
          lexical.TextNode,
          lexical.ParagraphNode,
          lexical.HeadingNode,
          lexical.ListItemNode,
          lexical.ListNode,
          lexical.LinkNode,
          lexical.TableNode,
          lexical.TableCellNode,
          lexical.TableRowNode,
          lexical.CodeNode,
        ],
        onError: (error) => {
          console.error(error);
        },
      });

      this.$editor = this.$("#editor-container");

      LexicalComposer({
        editor: this.editor,
        nodes: [
          LexicalContentEditable,
          LexicalHistoryPlugin,
          LexicalRichTextPlugin,
          LexicalListPlugin,
          LexicalMarkdownShortcutPlugin,
          LexicalAutoLinkPlugin,
          LexicalLinkPlugin,
          LexicalTablePlugin,
        ],
      }).then(() => {
        this.editor.update(() => {
          const root = lexical.$getRoot();
          root.append(lexical.$createParagraphNode());
        });
      });

      this.listenTo(this.model, "change:content", this.render);
      this.initSelectionChangeListener();
    },
    render: function () {
      this.$editor.html(this.model.get("content"));
      return this;
    },
    makeBold: function () {
      document.execCommand("bold");
      this.updateContent();
    },
    makeItalic: function () {
      document.execCommand("italic");
      this.updateContent();
    },
    makeUnderline: function () {
      document.execCommand("underline");
      this.updateContent();
    },
    makeStrikethrough: function () {
      document.execCommand("strikethrough");
      this.updateContent();
    },
    leftAlign: function () {
      document.execCommand("justifyLeft");
      this.updateContent();
    },
    centerAlign: function () {
      document.execCommand("justifyCenter");
      this.updateContent();
    },
    rightAlign: function () {
      document.execCommand("justifyRight");
      this.updateContent();
    },
    justifyAlign: function () {
      document.execCommand("justifyFull");
      this.updateContent();
    },
    makeCode: function () {
      document.execCommand("formatBlock", false, "<pre>");
      this.updateContent();
    },
    makeQuote: function () {
      document.execCommand("formatBlock", false, "<blockquote>");
      this.updateContent();
    },
    makeBulletList: function () {
      document.execCommand("insertUnorderedList");
      this.updateContent();
    },
    makeNumberedList: function () {
      document.execCommand("insertOrderedList");
      this.updateContent();
    },
    makeLink: function () {
      const url = prompt("Enter the URL");
      if (url) {
        document.execCommand("createLink", false, url);
      }
      this.updateContent();
    },
    makeH1: function () {
      document.execCommand("formatBlock", false, "<h1>");
      this.updateContent();
    },
    makeH2: function () {
      document.execCommand("formatBlock", false, "<h2>");
      this.updateContent();
    },
    makeH3: function () {
      document.execCommand("formatBlock", false, "<h3>");
      this.updateContent();
    },
    makeH4: function () {
      document.execCommand("formatBlock", false, "<h4>");
      this.updateContent();
    },
    makeH5: function () {
      document.execCommand("formatBlock", false, "<h5>");
      this.updateContent();
    },
    makeH6: function () {
      document.execCommand("formatBlock", false, "<h6>");
      this.updateContent();
    },
    makeSubscript: function () {
      document.execCommand("subscript");
      this.updateContent();
    },
    makeSuperscript: function () {
      document.execCommand("superscript");
      this.updateContent();
    },
    insertImage: function () {
      const url = prompt("Enter the image URL");
      if (url) {
        document.execCommand("insertImage", false, url);
      }
      this.updateContent();
    },
    insertTable: function () {
      const rows = prompt("Enter number of rows");
      const cols = prompt("Enter number of columns");
      let table = "<table>";
      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < cols; j++) {
          table += "<td>&nbsp;</td>";
        }
        table += "</tr>";
      }
      table += "</table>";
      document.execCommand("insertHTML", false, table);
      this.updateContent();
    },
    insertHorizontalRule: function () {
      document.execCommand("insertHorizontalRule");
      this.updateContent();
    },
    insertEmoticon: function () {
      const emoticon = prompt("Enter the emoticon");
      if (emoticon) {
        document.execCommand("insertText", false, emoticon);
      }
      this.updateContent();
    },
    insertHashtag: function () {
      const hashtag = prompt("Enter the hashtag");
      if (hashtag) {
        document.execCommand("insertText", false, `#${hashtag}`);
      }
      this.updateContent();
    },
    insertCollapsible: function () {
      const title = prompt("Enter the title");
      const content = prompt("Enter the content");
      const collapsible = `
        <details>
          <summary>${title}</summary>
          <p>${content}</p>
        </details>`;
      document.execCommand("insertHTML", false, collapsible);
      this.updateContent();
    },
    changeFontFamily: function (event) {
      const fontFamily = event.target.value;
      document.execCommand("fontName", false, fontFamily);
      this.updateContent();
    },
    changeFontSize: function (event) {
      const fontSize = event.target.value;
      document.execCommand("fontSize", false, fontSize);
      this.updateContent();
    },
    changeTextColor: function () {
      const color = prompt("Enter the text color");
      if (color) {
        document.execCommand("foreColor", false, color);
      }
      this.updateContent();
    },
    changeBackgroundColor: function () {
      const color = prompt("Enter the background color");
      if (color) {
        document.execCommand("hiliteColor", false, color);
      }
      this.updateContent();
    },
    clearFormatting: function () {
      document.execCommand("removeFormat");
      this.updateContent();
    },
    undo: function () {
      document.execCommand("undo");
      this.updateContent();
    },
    redo: function () {
      document.execCommand("redo");
      this.updateContent();
    },
    updateContent: function () {
      this.model.set("content", this.$editor.html());
      this.updateToolbarButtons();
    },
    updateToolbarButtons: function () {
      this.editor.update(() => {
        const selection = lexical.$getSelection();
        if (selection && lexical.$isRangeSelection(selection)) {
          const state = this.editor.getEditorState();
          const updateButtonState = (command, buttonSelector) => {
            const isActive = state.read(() => {
              const nodes = selection.getNodes();
              for (const node of nodes) {
                if (node.hasFormat(command)) {
                  return true;
                }
              }
              return false;
            });
            this.$(buttonSelector).toggleClass("active", isActive);
          };

          updateButtonState("bold", "#bold-button");
          updateButtonState("italic", "#italic-button");
          updateButtonState("underline", "#underline-button");
          updateButtonState("strikethrough", "#strikethrough-button");
          updateButtonState("subscript", "#subscript-button");
          updateButtonState("superscript", "#superscript-button");
        }
      });
    },
    initSelectionChangeListener: function () {
      this.editor.registerUpdateListener(() => {
        this.updateToolbarButtons();
      });
    },
  });
});
