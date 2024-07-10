define(["moduleA", "../utils/math"], function (moduleA, math) {
  return {
    result: function () {
      return "Result: " + math.multiply(moduleA.compute(), 2);
    },
  };
});
