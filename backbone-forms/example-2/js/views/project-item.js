var app = app || {};

app.ProjectItemView = Backbone.View.extend({
  tagName: "li",
  template: _.template($("#project-item-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "destroy", this.remove);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    "click .delete": "deleteProject",
  },

  deleteProject: function () {
    this.model.destroy();
  },
});
