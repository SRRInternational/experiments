var app = app || {};

app.User = Backbone.Model.extend({
  schema: {
    name: {
      type: "TextArea",
      validators: ["required"],
    },
  },
});
