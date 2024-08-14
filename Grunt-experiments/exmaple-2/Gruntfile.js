module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Uglify configuration
    uglify: {
      dist: {
        files: {
          "dist/script.min.js": [
            "js/script1.js",
            "js/script2.js",
            "js/script3.js",
          ],
        },
      },
    },

    // Concat configuration
    concat: {
      dist: {
        src: ["js/script1.js", "js/script2.js", "js/script3.js"],
        dest: "dist/scripts.concat.js",
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

    // Watch configuration
    watch: {
      scripts: {
        files: ["js/*.js"],
        tasks: ["concat", "uglify"],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ["css/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
        },
      },
    },

    // Connect configuration
    connect: {
      server: {
        options: {
          port: 9000,
          base: ".",
          keepalive: true,
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  // Default task(s).
  grunt.registerTask("default", ["concat", "uglify", "sass"]);

  // Serve task
  grunt.registerTask("serve", ["connect"]);
};
