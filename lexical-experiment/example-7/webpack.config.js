const path = require("path");
const fs = require("fs");

// Helper function to get all .dev.mjs files under @lexical
function getLexicalDevEntries() {
  const lexicalDir = path.resolve(__dirname, "node_modules", "@lexical");
  const entries = {};

  function findDevFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
        findDevFiles(fullPath);
      } else if (file.endsWith(".dev.mjs")) {
        const relativePath = path.relative(lexicalDir, fullPath);
        entries[relativePath.replace(/\\/g, "/").replace(/\.dev\.mjs$/, "")] = fullPath;
      }
    });
  }

  findDevFiles(lexicalDir);
  return entries;
}

module.exports = {
  entry: getLexicalDevEntries(),
  output: {
    path: path.resolve(__dirname, "js", "lib"),
    filename: "[name].js",
    libraryTarget: "amd",
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules\/@lexical/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-modules-amd"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".mjs"],
  },
};
