define([
  'core/js/adapt',
  './calculator/completionCalculations',
  './drawer/PageLevelProgressView',
  './drawer/PageLevelProgressIndicatorView'
], function(Adapt, completionCalculations, PageLevelProgressView, PageLevelProgressIndicatorView) {

  var PageLevelProgressNavigationView = Backbone.View.extend({

    tagName: 'button',

    className: 'btn-icon nav__btn nav__pagelevelprogress-btn pagelevelprogress__nav-btn',

    events: {
      'click': 'onProgressClicked'
    },

    initialize: function() {
      _.bindAll(this, 'updateProgressBar');
      this.setUpEventListeners();
      this.render();
      this.addIndicator();
      this.deferredUpdate();//
    },

    setUpEventListeners: function() {
      this.listenTo(Adapt, {
        'remove': this.remove,
        'router:location': this.updateProgressBar,
        'pageLevelProgress:update': this.refreshProgressBar
      });
    },

    render: function() {// adding progress tooltip
      var template = Handlebars.templates['plp-nav-view'];
      this.$el.html(template({}));
    },

    addIndicator: function() {// adding indicator and calling indicator view
      this.indicatorView = new PageLevelProgressIndicatorView({
        model: this.model,//passed in extension3
        collection: this.collection,//passed in extension3
        calculatePercentage: this._getPageCompletionPercentage,// will calculate pencentage comleted
        ariaLabel: Adapt.course.get('_globals')._extensions._pageLevelProgress.pageLevelProgressIndicatorBar
      });
      //this.indicatorView drawer indicator
      this.$el.prepend(this.indicatorView.$el);
    },

    _getPageCompletionPercentage: function() {// calls calculatePercentageComplete
      return completionCalculations.calculatePercentageComplete(this.model);
    },

    deferredUpdate: function() {
      _.defer(this.updateProgressBar);
    },

    updateProgressBar: function() {
      this.indicatorView.refresh(); //this.indicatorView drawer indicator
    },

    refreshProgressBar: function() {// on progress update
      this.collection.repopulate();
      this.updateProgressBar();
    },

    onProgressClicked: function(event) {// on drawer clicked
      if (event && event.preventDefault) event.preventDefault();
      //view will appear in drawer
      Adapt.drawer.triggerCustomView(new PageLevelProgressView({
        collection: this.collection
      }).$el, false);//2nd argv for back btn
    },

    remove: function() {
      Backbone.View.prototype.remove.call(this);
      this.collection.reset();
    }

  });

  return PageLevelProgressNavigationView;

});
