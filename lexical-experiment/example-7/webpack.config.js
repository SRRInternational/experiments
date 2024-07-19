const path = require("path");

module.exports = {
  entry: "/node_modules/lexical/lexical.dev.mjs",
  output: {
    path: path.resolve(__dirname, "js", "lib"),
    filename: "lexical.amd.js",
    libraryTarget: "amd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-modules-amd"],
          },
        },
      },
    ],
  },
};
