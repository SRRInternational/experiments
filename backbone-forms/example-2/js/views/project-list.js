var app = app || {};

app.ProjectListView = Backbone.View.extend({
    el: '#project-list',

    initialize: function() {
        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'reset', this.addAll);
        this.render();
    },

    render: function() {
        this.$el.html('<h2>Projects</h2><ul></ul>');
        this.addAll();
        return this;
    },

    addOne: function(project) {
        var view = new app.ProjectItemView({ model: project });
        this.$('ul').append(view.render().el);
    },

    addAll: function() {
        this.$('ul').empty();
        this.collection.each(this.addOne, this);
    }
});