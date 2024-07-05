require(["jquery", "tinymce"], function () {
  tinymce.init({
    selector: "#myTextarea",
    plugins:
      "advlist autolink lists link image charmap print preview anchor",
    toolbar:
      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image",
    height: 400,
    content_style:
      "body { font-family: Arial, sans-serif; font-size: 16px; }", // Example of setting content style
    aria: true, // Enable ARIA support
    accessibility_warnings: true, // Enable accessibility warnings in the editor
    setup: function (editor) {
      // Optional: Customize settings or add additional setup
      try {
        editor.ui.registry.getAll().icons.forEach(function (icon) {
          // Update icon HTML to include ARIA label
          icon.html =
            '<span class="tox-icon tox-icon--' +
            icon.name +
            '" aria-label="' +
            icon.name +
            '"></span>';
        });
      } catch (error) {}
    },
  });
  console.log("loaded!");
});
