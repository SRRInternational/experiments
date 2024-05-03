define([
 'core/js/adapt',
 './PageLevelProgressItemView'
], function(Adapt, PageLevelProgressItemView) {

  var PageLevelProgressView = Backbone.View.extend({

    className: 'pagelevelprogress',

    events: {
      'click .js-pagelevelprogress-item-click': 'scrollToPageElement'
    },

    initialize: function() {//input: collection
      //if (Adapt.course.get("")) return;
      this.listenTo(Adapt, 'remove', this.remove);
      this.render();
      this.addChildren();
    },

    scrollToPageElement: function(event) {//scrolling to selected element
      if (event && event.preventDefault) event.preventDefault();

      var $target = $(event.currentTarget);
      if ($target.is('.is-disabled')) return;//if item is diabled then do nothing

      var currentComponentSelector = '.' + $target.attr('data-pagelevelprogress-id');// data-pagelevelprogress-id from item view

      //adding listener if drawer:closed event and calling drawer:closeDrawer
      Adapt.once('drawer:closed', function() {
        Adapt.scrollTo(currentComponentSelector, { duration: 400 });
      }).trigger('drawer:closeDrawer', $(currentComponentSelector));
    },

    render: function() {
      var template = Handlebars.templates['plp-drawer'];
      this.$el.html(template({}));
    },

    addChildren: function() {
      var $children = this.$('.js-children');
      this.collection.each(function(model) {//adding childrens in drawer
        $children.append(new PageLevelProgressItemView({
          model: model
        }).$el);
      }.bind(this));
    }

  });

  return PageLevelProgressView;

});
