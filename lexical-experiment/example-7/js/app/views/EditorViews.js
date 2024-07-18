define(["jquery", "backbone", "lexical"], function ($, Backbone, lexical) {
  return Backbone.View.extend({
    el: "#editor-container",
    events: {
      "click #bold-button": "makeBold",
      "click #italic-button": "makeItalic",
      "click #underline-button": "makeUnderline",
      "click #strikethrough-button": "makeStrikethrough",
      "click #left-align-button": "leftAlign",
      "click #center-align-button": "centerAlign",
      "click #right-align-button": "rightAlign",
      "click #justify-align-button": "justifyAlign",
      "click #code-button": "makeCode",
      "click #quote-button": "makeQuote",
      "click #bullet-list-button": "makeBulletList",
      "click #numbered-list-button": "makeNumberedList",
      "click #link-button": "makeLink",
      "click #h1-button": "makeH1",
      "click #h2-button": "makeH2",
      "click #highlight-button": "makeHighlight",
      "click #subscript-button": "makeSubscript",
      "click #superscript-button": "makeSuperscript",
      "click #clear-formatting-button": "clearFormatting",
    },
    initialize: function () {
      this.editor = lexical.createEditor();
      this.$editor = this.$("#editor-container");
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
    makeHighlight: function () {
      document.execCommand("hiliteColor", false, "yellow");
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
    clearFormatting: function () {
      document.execCommand("removeFormat");
      this.updateContent();
    },
    updateContent: function () {
      this.model.set("content", this.$editor.html());
      this.updateToolbarButtons();
    },
    updateToolbarButtons: function () {
      this.toggleButtonActiveState("#bold-button", "bold");
      this.toggleButtonActiveState("#italic-button", "italic");
      this.toggleButtonActiveState("#underline-button", "underline");
      this.toggleButtonActiveState("#strikethrough-button", "strikethrough");
      this.toggleButtonActiveState("#left-align-button", "justifyLeft");
      this.toggleButtonActiveState("#center-align-button", "justifyCenter");
      this.toggleButtonActiveState("#right-align-button", "justifyRight");
      this.toggleButtonActiveState("#justify-align-button", "justifyFull");
      this.toggleButtonActiveState("#code-button", "formatBlock", "<pre>");
      this.toggleButtonActiveState(
        "#quote-button",
        "formatBlock",
        "<blockquote>"
      );
      this.toggleButtonActiveState(
        "#bullet-list-button",
        "insertUnorderedList"
      );
      this.toggleButtonActiveState(
        "#numbered-list-button",
        "insertOrderedList"
      );
    },
    toggleButtonActiveState: function (buttonSelector, command, value) {
      const isActive = document.queryCommandState(command, value);
      this.$(buttonSelector).toggleClass("active", isActive);
    },
    initSelectionChangeListener: function () {
      document.addEventListener(
        "selectionchange",
        this.updateToolbarButtons.bind(this)
      );
    },
  });
});
