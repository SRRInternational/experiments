module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          mainConfigFile: "config.js",
          out: "build/out.js",
          findNestedDependencies: true,
          name: "js/main",
          optimize: "none",
          //include: ["jquery.min", "jquery-ui.min", "../src/jquery.multiselect"],
        },
      },
    },
    uglify: {
      compile: {
        files: {
          "build/out.js": ["build/out.js"],
        },
      },
    },
    less: {
      compile: {
        options: {
          paths: ["files"],
          compress: true,
        },
        files: {
          "build/output.min.css": "css/*.less",
        },
      },
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ["index.html", "require.js"],
            dest: "build",
          },
        ],
      },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: "build",
          keepalive: true,
          open: true,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-connect");

  // Default task(s).
  grunt.registerTask("build", [
    "requirejs:compile",
    "less",
    "copy",
    "uglify",
    "connect:server",
  ]);
};
