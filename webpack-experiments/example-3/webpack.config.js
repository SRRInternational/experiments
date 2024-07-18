// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
      {
        test: /\.(png|jpg|gif)$/, // Use the file-loader for images
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]", // Include a hash for cache busting
              outputPath: "assets/images", // Output directory for images
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use the HTML file as a template
      filename: "index.html", // Output file name
    }),
  ],
  mode: "development", // Set the mode to 'development' or 'production'
};
