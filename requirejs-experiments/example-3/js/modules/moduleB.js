define(["./moduleA"], function (moduleA) {
  return {
    processData: function () {
      return "Processed data: " + moduleA.calculate(10, 5);
    },
  };
});
