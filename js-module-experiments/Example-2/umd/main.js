// Check if module is running in Node.js
if (
  typeof require === "function" &&
  typeof module === "object" &&
  module.exports
) {
  const math = require("./math");
  console.log(math.add(2, 3)); // Output: 5
  console.log(math.subtract(5, 2)); // Output: 3
  console.log(math.multiply(2, 3)); // Output: 6
  console.log(math.divide(6, 3)); // Output: 2
} else if (typeof define === "function" && define.amd) {
  // AMD
  require(["./math"], function (math) {
    console.log(math.add(2, 3)); // Output: 5
    console.log(math.subtract(5, 2)); // Output: 3
    console.log(math.multiply(2, 3)); // Output: 6
    console.log(math.divide(6, 3)); // Output: 2
  });
} else {
  // Browser global
  console.log(math.add(2, 3)); // Output: 5
  console.log(math.subtract(5, 2)); // Output: 3
  console.log(math.multiply(2, 3)); // Output: 6
  console.log(math.divide(6, 3)); // Output: 2
}
