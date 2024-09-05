module.exports = function (grunt, options) {
  var _ = require("underscore");
  var path = require("path");

  var getUnixPath = function (filepath) {
    // convert to unix style slashes
    return filepath.replace(/\\/g, "/");
  };

  var collate = function (collateAtFolderName, destFolder, srcFileName) {
    destFolder = getUnixPath(destFolder);
    srcFileName = getUnixPath(srcFileName);

    // ignore if the srcFileName ends with the collateAtFolderName
    var nameParts = srcFileName.split("/");
    if (nameParts[nameParts.length - 1] === collateAtFolderName) {
      return destFolder;
    }

    var startOfCollatePath = srcFileName.indexOf(collateAtFolderName) + collateAtFolderName.length + 1;
    var collatedFilePath = destFolder + srcFileName.substr(startOfCollatePath);

    return collatedFilePath;
  };

  var nonServerTasks = {
    courseAssets: {
      files: [
        {
          expand: true,
          src: ["<%= languages %>/**/*", "!**/*.<%= jsonext %>"],
          cwd: "<%= sourcedir %>course/",
          dest: "<%= outputdir %>course/",
        },
      ],
    },
    courseJson: {
      files: [
        {
          expand: true,
          src: ["<%= languages %>/*.<%= jsonext %>"],
          cwd: "<%= sourcedir %>course/",
          dest: "<%= outputdir %>course/",
        },
      ],
    },
  };
  var getScormVersion = (function () {
    try {
      var configFilePath = path.join(options.outputdir, "course", "config.json");
      var configFile = grunt.file.readJSON(configFilePath);
      var scormVersion = _.property(["_spoor", "_advancedSettings", "_scormVersion"]);
      // console.log(configFile);
      console.log("with underscore property: " + scormVersion(configFile));
      return scormVersion(configFile);
    } catch (e) {
      return "2004";
    }
  })();

  var mandatoryTasks = {
    coreAssets: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>core/assets/**"],
          dest: "<%= outputdir %>assets/",
          rename: _.partial(collate, "assets"),
        },
      ],
    },
    componentAssets: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>components/**/assets/**"],
          dest: "<%= outputdir %>assets/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "assets"),
        },
      ],
    },
    componentFonts: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>components/**/fonts/**"],
          dest: "<%= outputdir %>fonts/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "fonts"),
        },
      ],
    },
    extensionAssets: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>extensions/**/assets/**"],
          dest: "<%= outputdir %>assets/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "assets"),
        },
      ],
    },
    extensionFonts: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>extensions/**/fonts/**"],
          dest: "<%= outputdir %>fonts/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "fonts"),
        },
      ],
    },
    menuAssets: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>menu/<%= menu %>/assets/**"],
          dest: "<%= outputdir %>assets/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "assets"),
        },
      ],
    },
    coreFonts: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>core/fonts/**"],
          dest: "<%= outputdir %>fonts/",
          filter: "isFile",
          rename: _.partial(collate, "fonts"),
        },
      ],
    },
    menuFonts: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>menu/<%= menu %>/fonts/**"],
          dest: "<%= outputdir %>fonts/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "fonts"),
        },
      ],
    },
    themeAssets: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>theme/<%= theme %>/assets/**"],
          dest: "<%= outputdir %>assets/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "assets"),
        },
      ],
    },
    themeFonts: {
      files: [
        {
          expand: true,
          src: ["<%= sourcedir %>theme/<%= theme %>/fonts/**"],
          dest: "<%= outputdir %>fonts/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "fonts"),
        },
      ],
    },
    coreLibraries: {
      files: [
        {
          expand: true,
          src: ["core/libraries/**/*"],
          cwd: "<%= sourcedir %>",
          dest: "<%= outputdir %>libraries/",
          rename: _.partial(collate, "libraries"),
        },
      ],
    },
    libraries: {
      files: [
        {
          expand: true,
          src: ["components/**/libraries/**/*", "extensions/**/libraries/**/*", "menu/<%= menu %>/libraries/**/*", "theme/<%= theme %>/libraries/**/*"],
          cwd: "<%= sourcedir %>",
          dest: "<%= outputdir %>libraries/",
          filter: function (filepath) {
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "libraries"),
        },
      ],
    },
    coreRequired: {
      files: [
        {
          expand: true,
          src: ["core/required/**/*"],
          cwd: "<%= sourcedir %>",
          dest: "<%= outputdir %>",
          rename: _.partial(collate, "required"),
        },
      ],
    },
    required: {
      files: [
        {
          expand: true,
          src: ["components/**/required/**/*", "extensions/**/required/**/*", "menu/<%= menu %>/required/**/*", "theme/<%= theme %>/required/**/*"],
          cwd: "<%= sourcedir %>",
          dest: "<%= outputdir %>",
          filter: function (filepath) {
            var isSpoor = filepath.includes("adapt-contrib-spoor");
            if (isSpoor) {
              return false;
            }
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, "required"),
        },
      ],
    },
    requiredSpoor: {
      files: [
        {
          expand: true,
          src: ["extensions/adapt-contrib-spoor/required/**/*"],
          cwd: "<%= sourcedir %>",
          dest: "<%= outputdir %>",
          filter: function (filepath) {
            var isSpoor = filepath.includes("adapt-contrib-spoor");
            if (isSpoor) {
              var isValidFile = filepath.includes(path.join("adapt-contrib-spoor", "required", getScormVersion));
              if (!isValidFile) {
                return false;
              }
            }
            return grunt.config("helpers").includedFilter(filepath);
          },
          rename: _.partial(collate, `required/${getScormVersion}`)
        },
      ],
    },
  };

  if (grunt.option("outputdir")) return mandatoryTasks;

  return _.extend({}, nonServerTasks, mandatoryTasks);
};
