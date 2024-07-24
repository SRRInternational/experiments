var app = app || {};

app.ProjectsCollection = Backbone.Collection.extend({
  model: app.ProjectModel,
  comparator: "startDate",
});
