import "./style.css";
import { setupCounter } from "./counter.js";
import $ from "jquery";
import myViewInstance from "./MyView.js";

$("#app").html(myViewInstance);

setupCounter(document.querySelector("#counter"));
