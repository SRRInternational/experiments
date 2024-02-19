var express = require("express"),
  port = process.env.PORT || 8000,
  app = express();

app.set("view engine", "hbs");

//HOME
app.get("/", function (req, res) {
  res.render("userView");
});
app.listen(port, function () {
  console.log("http://localhost:" + port + "/");
});
