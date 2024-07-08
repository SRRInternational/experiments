define([
  "jquery",
  "underscore",
  "backbone",
  "lexical",
  "@lexical/rich-text",
], function ($, _, Backbone, lexical, LexicalRichText) {
  var EditorView = Backbone.View.extend({
    initialize: function () {
      this.editor = lexical.createEditor({
        namespace: "MyEditor",
        onError: (error) => console.error(error),
        nodes: [
          LexicalRichText.HeadingNode,
          LexicalRichText.QuoteNode,
          LexicalRichText.ListNode,
          LexicalRichText.ListItemNode,
        ],
      });
    },

    render: function () {
      this.renderToolbar();
      this.renderEditor();
      return this;
    },

    renderToolbar: function () {
      var toolbar = $('<div class="toolbar"></div>');
      var buttons = [
        {
          name: "bold",
          icon: "B",
          command: lexical.FORMAT_TEXT_COMMAND,
          value: "bold",
        },
        {
          name: "italic",
          icon: "I",
          command: lexical.FORMAT_TEXT_COMMAND,
          value: "italic",
        },
        {
          name: "underline",
          icon: "U",
          command: lexical.FORMAT_TEXT_COMMAND,
          value: "underline",
        },
      ];

      _.each(buttons, function (button) {
        var $button = $("<button>")
          .addClass("toolbar-item")
          .attr("data-command", button.command)
          .attr("data-value", button.value)
          .text(button.icon);
        toolbar.append($button);
      });

      this.$("#toolbar").html(toolbar);
      this.attachToolbarListeners();
    },

    renderEditor: function () {
      var $editor = $("<div>").attr("id", "lexical-editor");
      this.$("#editor").html($editor);
      this.editor.setRootElement($editor[0]);
    },

    attachToolbarListeners: function () {
      var self = this;
      this.$(".toolbar-item").on("click", function () {
        var command = $(this).data("command");
        var value = $(this).data("value");
        self.editor.dispatchCommand(command, value);
      });

      this.editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          var selection = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection)) {
            self.$(".toolbar-item").each(function () {
              var $button = $(this);
              var format = $button.data("value");
              $button.toggleClass("active", selection.hasFormat(format));
            });
          }
        });
      });
    },
  });

  return EditorView;
});
