const fs = require("fs");

fs.rmdir("F:\\Training Projects\\Handlebars_Analyzer-master\\css",{
    recursive: true,
  }, (err) => {
  if (err) throw err;
});
