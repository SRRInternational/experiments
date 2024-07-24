var app = app || {};

app.initialize = function () {
  app.projects = new app.ProjectsCollection();
  app.projectFormView = new app.ProjectFormView({ collection: app.projects });
  app.projectListView = new app.ProjectListView({ collection: app.projects });
};
