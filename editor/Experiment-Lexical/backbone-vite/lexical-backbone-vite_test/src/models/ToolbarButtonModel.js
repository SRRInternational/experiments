// src/models/ToolbarButtonModel.js
import Backbone from 'backbone';

const ToolbarButtonModel = Backbone.Model.extend({
  defaults: {
    label: '',
    command: '',
  },
});

export default ToolbarButtonModel;
