module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Uglify configuration
    uglify: {
      dist: {
        files: {
          "dist/script.min.js": ["js/script.js"],
        },
      },
    },

    // Sass configuration
    sass: {
      dist: {
        files: {
          "dist/styles.css": "css/styles.scss",
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");

  // Default task(s).
  grunt.registerTask("default", ["uglify", "sass"]);
};
