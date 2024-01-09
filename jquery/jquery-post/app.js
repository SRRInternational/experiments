var express = require("express"),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 8000,
  app = express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//HOME
app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.post("/user", function (req, res) {
  res.status(200).json(req.body);
});
app.listen(port, function () {
  console.log(`http://localhost:${port}/`);
});
