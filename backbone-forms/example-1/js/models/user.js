var app = app || {};

app.UserModel = Backbone.Model.extend({
  defaults: {
    firstName: "",
    lastName: "",
    email: "",
    age: 18,
  },

  schema: {
    firstName: { type: "Text", validators: ["required"] },
    lastName: { type: "Text", validators: ["required"] },
    email: { type: "Text", validators: ["required", "email"] },
    age: {
      type: "Number",
      validators: ["required", { type: "range", min: 18, max: 100 }],
    },
  },
});
