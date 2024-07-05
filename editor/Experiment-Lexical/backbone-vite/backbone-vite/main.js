import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import _ from "underscore";
import $ from "jquery";
import Backbone from "backbone";

// Define a model
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
    const name = this.model.get("name");
    this.$el.html(`Name: ${name}`);
  },
});

// Instantiate the model and view
const myModelInstance = new MyModel({ name: "John Doe" });
const myViewInstance = new MyView({ model: myModelInstance });

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="h1-content">Hello ${myViewInstance.el}!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

$(".h1-content").html(myViewInstance.el);

setupCounter(document.querySelector("#counter"));
