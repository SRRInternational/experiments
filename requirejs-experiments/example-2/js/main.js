require.config({
  baseUrl: "js",
  paths: {
    math: "utils/math",
    moduleA: "app/moduleA",
    moduleB: "app/moduleB",
  },
});

require(["moduleA", "moduleB"], function (moduleA, moduleB) {
  console.log("Module A result:", moduleA.compute());
  console.log("Module B result:", moduleB.result());
});
