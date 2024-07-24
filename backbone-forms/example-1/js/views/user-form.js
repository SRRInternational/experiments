var app = app || {};

app.UserFormView = Backbone.View.extend({
  el: "#user-form",

  initialize: function () {
    this.form = new Backbone.Form({
      model: this.model,
    });
    this.render();
  },

  render: function () {
    this.$el.html(this.form.render().el);
    this.$el.append('<button id="submit">Submit</button>');
    return this;
  },

  events: {
    "click #submit": "submitForm",
  },

  submitForm: function (e) {
    e.preventDefault();

    console.log("Form data:", this.model.toJSON());
    alert("Form submitted successfully!");

    var errors = this.form.commit();
    if (!errors) {
      console.log("Form data:", this.model.toJSON());
      alert("Form submitted successfully!");
    } else {
      console.log("Form errors:", errors);
    }
  },
});
