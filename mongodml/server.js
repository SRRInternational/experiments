const express = require("express");
const async = require("async");
const { getDatabase } = require("./lib/database");
const configuration = require("./lib/configuration");
// const helpers = require("./lib/helpers");
// const console = require("./lib/console");
const properties = require("./data/properties");
const app = express();
const port = 3000;
const memodata = require("./data/memo");
const _ = require("underscore");

// Mock objects and functions
const usermanager = {
  getCurrentUser: function () {
    return {
      tenant: {
        _id: "679c693d2ed8c85d08d43929",
      },
    };
  },
};

app.get("/", (req, res, next) => {
  // memo of transformed schema data
  var memo = memodata.data;
  var blackList = [
    "_component",
    "_componentType",
    "_courseId",
    "createdAt",
    "createdBy",
    "_enabledExtensions",
    "_hasPreview",
    "_isDeleted",
    "_isSelected",
    "_latestTrackingId",
    "_layout",
    "layoutOptions",
    "_menu",
    "_parentId",
    "_sortOrder",
    "_supportedLayout",
    "_tenantId",
    "_theme",
    "_trackingId",
    "_type",
    "updatedAt",
    "updatedBy",
    "externalReferences",
    "_colorLabel",
    "_themePreset",
  ];

  processPlugins(memo, function (err) {
    if (err) {
      console.log("error", err);
      return next(err);
    }
    filterSchemas(memo, function (err, schemas) {
      if (err) {
        console.log("error", err);
        return next(err);
      }
      res.status(200).json(schemas);
    });
  });

  function processPlugins(memo, callback) {
    getDatabase(function (err, db) {
      // iterate through plugin types
      async.eachSeries(
        memo.pluginTypes,
        function (pluginType, outerCallback) {
          if (err) return callback(err);
          db.retrieve(
            pluginType.collectionType,
            { _tenantId: "679c693d2ed8c85d08d43929" },
            function (err, results) {
              if (err) return callback(err);
              // iterate through all plugins for current type
              async.eachSeries(
                results,
                function (schema, innerCallback) {
                  processPlugin(pluginType, schema, memo, innerCallback);
                },
                outerCallback
              );
            }
          );
        },
        callback
      );
    }, configuration.getConfig("masterTenantID"));
  }

  function processPlugin(pluginType, schema, memo, callback) {
    if (schema.globals) {
      processGlobals(pluginType, schema, memo);
    }
    if (pluginType.type === "component") {
      memo.schemas[schema.component] = generateComponentProperties(schema);
      return callback();
    }
    // must be extension, component, menu or theme
    processPluginLocations(pluginType, schema, memo, callback);
  }

  function processGlobals(pluginType, schema, memo) {
    if (!memo.globals[pluginType.key]) {
      memo.globals[pluginType.key] = { type: "object", properties: {} };
    }
    _.extend(memo.globals[pluginType.key].properties, {
      ["_" + schema[pluginType.type]]: {
        type: "object",
        title: schema.displayName || "",
        properties: schema.globals,
      },
    });
  }

  function generateComponentProperties(schema) {
    var data = {};
    data.properties = properties.data;
    var instructorNote = "instructorNote";
    var instructorNoteFields = {
      type: "string",
      required: false,
      default: "",
      inputType: "TextArea",
      validators: [],
      title: "Instructor Note",
      help: "Add a instructor note here",
      translatable: true,
    };
    var slideshowNote = "slideshowNote";
    var slideshowNoteFields = {
      type: "string",
      required: false,
      default: "",
      inputType: "TextArea",
      validators: [],
      title: "Slideshow Note",
      help: "Add a slideshow note here, appears under speaker note in slides",
      translatable: true,
    };
    var printNote = "printNote";
    var printNoteFields = {
      type: "string",
      required: false,
      default: "",
      inputType: "TextArea",
      validators: [],
      title: "Print Note",
      help: "Add a print note here",
      translatable: true,
    };
    data.properties.properties.properties[instructorNote] =
      instructorNoteFields;
    data.properties.properties.properties[slideshowNote] = slideshowNoteFields;
    data.properties.properties.properties[printNote] = printNoteFields;
    return data;
  }

  function processPluginLocations(pPluginType, schema, memo, callback) {
    var pluginType = pPluginType.type;
    try {
      var schemaPluginLocations = schema.properties.pluginLocations.properties;
    } catch (e) {
      // handle undefined pluginLocations
      if (!_.isEmpty(schema.properties)) {
        // in case we have an empty pluginLocations
        delete schema.properties.pluginLocations;
        memo.schemas[schema[pluginType]] = schema;
      }
      return callback();
    }
    async.each(
      Object.keys(schemaPluginLocations),
      function (key, eachCallback) {
        var props = schemaPluginLocations[key].properties;
        if (!props) {
          return eachCallback();
        }
        var keys = Object.keys(props);
        if (!keys.length) {
          const errLog = new Error(`Expected 1 property, found ${keys.length}`);
          console.log("error", errLog.stack || errLog.message);
          return eachCallback();
        }
        // NOTE we need a single top-level object
        if (keys.length > 1) {
          return eachCallback(
            new Error(`Expected 1 property, found ${keys.length}`)
          );
        }
        var typeObj = memo.contentModelData[pluginType];
        // don't overwrite an existing attribute
        if (
          typeObj[key] &&
          _.intersection(Object.keys(typeObj[key]), keys).length > 0
        ) {
          return eachCallback(
            new Error(
              `Already found ${pluginType} ${key} attribute with key ${keys[0]} (${schema.name})`
            )
          );
        } else if (!typeObj) {
          memo.contentModelData[pluginType] = typeObj = {};
        }
        // NOTE this is needed to check against applied menu/theme in schemas.js
        props[keys[0]].name = schema.name;

        typeObj[key] = _.extend({}, typeObj[key], props);
        eachCallback();
      },
      function (error) {
        if (error) return callback(error);
        // remove pluginLocations and store plugin schema
        delete schema.properties.pluginLocations;
        if (!_.isEmpty(schema.properties)) {
          memo.schemas[schema[pluginType]] = schema;
        }
        callback();
      }
    );
  }

  function filterSchemas(memo, callback) {
    var filteredSchemas = {};
    async.each(
      Object.keys(memo.schemas),
      function (key, callback) {
        var schema = memo.schemas[key];
        try {
          // Append plugin globals to the course schema
          if (key === "course" && schema.properties._globals.properties) {
            _.extend(schema.properties._globals.properties, memo.globals);
          }
        } catch (e) {
          // no globals, but no need to do anything
        }
        async.each(
          memo.pluginTypes,
          function (plugin, cb) {
            var pluginType = plugin.type;
            var memoData =
              (memo.contentModelData[pluginType] &&
                memo.contentModelData[pluginType][key]) ||
              {};
            // FIXME #2025: components are treated differently
            if (
              schema._doc &&
              schema._doc.component &&
              schema.properties[plugin.settingsProperty]
            ) {
              memoData = Object.assign(
                {},
                memo.contentModelData[pluginType].component,
                memoData
              );
            }
            if (_.isEmpty(memoData)) {
              return cb();
            }
            // define settings property if not present in legacy schema
            if (!schema.properties[plugin.settingsProperty]) {
              schema.properties[plugin.settingsProperty] = { type: "object" };
            }
            schema.properties[plugin.settingsProperty].properties = memoData;
            cb();
          },
          function (err) {
            // remove any blacklisted properties
            filteredSchemas[key] = _.omit(
              _.pick(schema, "properties").properties,
              blackList
            );
            callback();
          }
        );
      },
      function (err) {
        callback(err, filteredSchemas);
      }
    );
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
