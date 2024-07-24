var app = app || {};

app.ProjectFormView = Backbone.View.extend({
    el: '#project-form',

    initialize: function() {
        this.form = new Backbone.Form({
            model: new app.ProjectModel()
        });
        this.render();
    },

    render: function() {
        this.$el.html(this.form.render().el);
        this.$el.append('<button id="submit">Add Project</button>');
        return this;
    },

    events: {
        'click #submit': 'submitForm'
    },

    submitForm: function(e) {
        e.preventDefault();
        var errors = this.form.commit();
        if (!errors) {
            this.collection.add(this.form.model);
            this.form.model = new app.ProjectModel();
            this.form.render();
        } else {
            console.log('Form errors:', errors);
        }
    }
});