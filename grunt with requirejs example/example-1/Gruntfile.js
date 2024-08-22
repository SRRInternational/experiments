module.exports = function (grunt) {
  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: "js",
          mainConfigFile: "js/main.js",
          name: "main", // This should point to the main entry point of your app
          out: "dist/js/main.min.js",
          include: ["lib/require"], // Include require.js in the build
          wrapShim: true, // Wraps the shimmed dependencies correctly
          optimize: "uglify", // Use UglifyJS for minification
        },
      },
    },
    uglify: {
      build: {
        src: "dist/js/main.min.js",
        dest: "dist/js/main.min.js",
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["requirejs", "uglify"]);
};
