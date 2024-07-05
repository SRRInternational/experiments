// src/views/ToolbarView.js
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import $ from 'jquery';
import _ from 'underscore';

const toolbarTemplate = `
  <div class="toolbar">
    {{#each buttons}}
      <button data-command="{{command}}">{{label}}</button>
    {{/each}}
  </div>
`;

const compiledTemplate = Handlebars.compile(toolbarTemplate);

const ToolbarView = Backbone.View.extend({
  events: {
    'click button': 'executeCommand',
  },

  initialize(buttons) {
    this.buttons = buttons;
    this.render();
  },

  render() {
    const html = compiledTemplate({ buttons: this.buttons });
    this.$el.html(html);
    return this;
  },

  executeCommand(event) {
    const command = $(event.target).data('command');
    this.trigger('command:execute', command);
  },
});

export default ToolbarView;
