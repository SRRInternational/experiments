define(["jquery", "editor"], function ($, Editor) {
  $(document).ready(function () {
    const editor = new Editor("#editor");
    editor.init();
  });
});
