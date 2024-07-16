define(["jquery", "backbone", "lexical"], function ($, Backbone, lexical) {
  return Backbone.View.extend({
    el: "#editor-container",
    events: {
      "click #bold-button": "makeBold",
      "click #italic-button": "makeItalic",
      "click #underline-button": "makeUnderline",
    },
    initialize: function () {
      this.editor = lexical.createEditor();
      this.$editor = this.$("#editor");
      this.listenTo(this.model, "change:content", this.render);
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
    updateContent: function () {
      this.model.set("content", this.$editor.html());
    },
  });
});
