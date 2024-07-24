var app = app || {};

app.ProjectModel = Backbone.Model.extend({
  defaults: {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    priority: "medium",
    status: "not-started",
  },

  schema: {
    name: { type: "Text", validators: ["required"] },
    description: { type: "TextArea" },
    startDate: { type: "Date", validators: ["required"] },
    endDate: { type: "Date" },
    priority: {
      type: "Select",
      options: ["low", "medium", "high"],
      validators: ["required"],
    },
    status: {
      type: "Select",
      options: ["not-started", "in-progress", "completed"],
      validators: ["required"],
    },
  },

  validate: function (attrs) {
    if (attrs.endDate && attrs.startDate > attrs.endDate) {
      return "End date must be after start date";
    }
  },
});
