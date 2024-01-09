var express = require("express"),
  port = process.env.PORT || 8000,
  app = express();
var glob = require("glob");

app.get("/", function (req, res) {
  var assetsGlob =
    "F:/adapt_authoring/temp/634d37ffe8c3d612646555d6/adapt_framework/courses/634d37ffe8c3d612646555d6/634d37ffe8c3d612646555d6_634d38cae8c3d612646555ee_unzipped/src/course/en/assets/*";
  glob(assetsGlob, function (error, assets) {
    console.log(assets);
  });
});
