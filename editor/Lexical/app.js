const lex = require("lexical");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.set("view engine", "hbs");
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/lex", function (req, res) {
  console.log(lex.createEditor);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
