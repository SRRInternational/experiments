import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import Backbone from "backbone";
import Handlebars from "handlebars";
import _ from "underscore";
import $ from "jquery";
import editor from "./libs/editor/index";

const MyModel = Backbone.Model.extend({
  defaults: {
    name: "Default Name",
  },
});

// Define a view
const MyView = Backbone.View.extend({
  initialize: function () {
    this.render();
  },
  render: function () {
    const templateContent = `
        <div>
          <h1 class="h1-content">Hello {{name}}!</h1>
          <div class="toolbar"></div>
          <p class="lexical-editor" contenteditable>
          </p>
        </div>`;
    const template = Handlebars.compile(templateContent);
    const html = template(this.model.toJSON());
    this.$el.html(html);
    _.defer(this.postRender, 300);
    return this;
  },
  postRender: function () {
    const editorRef = $(".lexical-editor");
    editor(editorRef);
  },
});

// Instantiate the model and view
const myModelInstance = new MyModel({
  name: "Random name",
});
const myViewInstance = new MyView({ model: myModelInstance });

export default myViewInstance.el;
