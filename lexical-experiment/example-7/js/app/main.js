define([
  "jquery",
  "backbone",
  "app/models/EditorModel",
  "app/views/EditorViews",
], function ($, Backbone, EditorModel, EditorView) {
  $(function () {
    var editorModel = new EditorModel();
    var editorView = new EditorView({ model: editorModel });
  });
});
