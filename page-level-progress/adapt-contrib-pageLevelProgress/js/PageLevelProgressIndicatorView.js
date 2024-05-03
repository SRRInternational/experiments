define([
  'core/js/adapt'
], function(Adapt) {

  var PageLevelProgressIndicatorView = Backbone.View.extend({

    initialize: function(options) {
      options = options || {};
      this.calculatePercentage = options.calculatePercentage || this.calculatePercentage;
      this.ariaLabel = options.ariaLabel || '';
      this.type = options.type || this.model.get('_type');
      this.addClasses();
      this.setUpEventListeners();
      this.setPercentageComplete();
      this.render();
      this.refresh();
    },

    addClasses: function() {
      this.$el.addClass([
        'pagelevelprogress__indicator',
        'is-' + this.type
      ].join(' '));
    },
    
    checkAria: function() {
      if (!this.ariaLabel) {
        this.$el.attr('aria-hidden', true);
        return;
      }
      var data = this.getRenderData();
      this.$('.js-indicator-aria-label').html(Handlebars.compile(this.ariaLabel)(data));
    },

    setUpEventListeners: function() {
      this.listenTo(Adapt, 'remove', this.remove);
      this.listenTo(this.model, 'change:_isComplete', this.refresh);
      if (!this.collection) return;
      this.listenTo(this.collection, 'change:_isComplete', this.refresh);
    },
    
    setPercentageComplete: function() {
      var percentage =  this.calculatePercentage();
      this.model.set('percentageComplete', percentage);
      return percentage;
    },

    calculatePercentage: function() {
      return this.model.get('_isComplete') ? 100 : 0;
    },

    render: function() {
      var data = this.getRenderData();
      var template = Handlebars.templates[this.constructor.template];
      this.$el.html(template(data));
    },
    
    getRenderData: function() {
      var data = this.model.toJSON();
      data.ariaLabel = this.ariaLabel;
      data.type = this.type;
      return data;
    },

    refresh: function() {
      this.checkCompletion();
      this.checkAria();
      const progressBar = this.$el.children(".pagelevelprogress__indicator-inner")[0].attributes;
      if (progressBar.progresstype.value === "circular") {
        const percent = ((100 - this.calculatePercentage()) / 100) * -219.99078369140625;
        try {
          $(this.el).attr("title",`${this.calculatePercentage()}% Completed`).toolip();
        } catch (error) {}
        this.$('.js-indicator-bar.fill').css({
          "stroke-dashoffset": percent
        });
      } else {
        const modelProgressBar = this.$('.js-indicator-bar');
        if (modelProgressBar && modelProgressBar.length) {
          const percentage = this.calculatePercentage();
          this.addProgressPercentage(percentage);
          this.$('.js-indicator-bar').css({
            width: percentage + '%'
          });
        }
      }
    },

    addProgressPercentage: function(percentage){
      console.log(percentage + "%, " + this.model.get("_type"));
      const selector = this.$el;
      if(!selector.children(".progress-percentage").length) {
        selector.append(`<div class="progress-percentage" style="position:absolute;">${percentage}</div>`);
      } else {
        selector.children(".progress-percentage").html(percentage);
      }
    },

    checkCompletion: function() {
      var percentage = this.setPercentageComplete();
      this.$el
          .toggleClass('is-complete', percentage === 100)
          .toggleClass('is-incomplete', percentage !== 100);
    }

  }, {
    template: 'pageLevelProgressIndicator'
  });

  return PageLevelProgressIndicatorView;

});
