// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Use the style-loader and css-loader for CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development", // Set the mode to 'development' or 'production'
};
