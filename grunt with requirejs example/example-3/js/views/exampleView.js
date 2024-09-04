define(['backbone', 'jquery'], function(Backbone, $) {
    return Backbone.View.extend({
        el: '#app',
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html('<p>Backbone.js Model Example</p>');
            return this;
        }
    });
});
