define(["./moduleB"], function (moduleB) {
  return {
    displayResult: function () {
      return "Final result: " + moduleB.processData();
    },
  };
});
