module.exports = function (grunt) {
  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: "js",
          mainConfigFile: "js/main.js",
          name: "main",
          out: "dist/js/main.min.js",
          include: ["lib/require"], // Include require.js in the build
          wrapShim: true, // Wraps the shimmed dependencies correctly
          optimize: "uglify", // Use UglifyJS for minification
          paths: {
            jquery: "lib/jquery",
            underscore: "lib/underscore",
            backbone: "lib/backbone",
          },
          shim: {
            backbone: {
              deps: ["jquery", "underscore"],
              exports: "Backbone",
            },
          },
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
