const boxen = require("boxen");

console.log(boxen("This is plain text."));
console.log(boxen("This is plain text.", { padding: 1 }));
console.log(boxen("This is plain text.", { padding: 1, float: "center" }));
console.log(boxen("This is plain text.", { padding: 1, float: "right" }));

console.log(
  boxen("This is plain text.", { padding: 1, borderStyle: "double" })
);
