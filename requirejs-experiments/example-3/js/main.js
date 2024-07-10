require.config({
  baseUrl: "js",
  paths: {
    math: "utils/math",
    moduleA: "modules/moduleA",
    moduleB: "modules/moduleB",
    moduleC: "modules/moduleC",
  },
});

require(["moduleC"], function (moduleC) {
  console.log(moduleC.displayResult());
});
