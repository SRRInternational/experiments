// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
const async = require("async");
const configuration = require("./configuration");
const EventEmitter = require("events").EventEmitter;
const fs = require("fs");
const { Schema } = require("mongoose");
const logger = require("./logger");
const path = require("path");
const util = require("util");

/*
 * CONSTANTS
 */
const MODNAME = "database";
const WAITFOR = "configuration";

const errors = {
  notthere: function (dbfile) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor); // super helper method to include stack trace in error object
    this.name = "DatabaseNotAvailable";
    this.message = "Database file unvailable at (" + dbfile + ")";
  },
  nocallback: function (fnName) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor); // super helper method to include stack trace in error object
    this.name = "DatabaseFunctionCalledWithoutCallback";
    this.message = "Database function was called without being provided a callback :: " + fnName;
  },
};

Object.keys(errors).forEach(function (fnName) {
  util.inherits(errors[fnName], Error);
});
const ReadyStates = {
  WAITING: 0,
  READY: 1,
};

// memoizes database instances
var _databases = Object.create(null);

// private hooks - only allow hooks defined here
var _dbHooks = Object.create(null);
_dbHooks["create"] = [];

/**
 * @api private
 */
function getDriverPath() {
  return path.join(configuration.serverRoot, "lib", "dml");
}

/**
 * @api private
 */
function getSchemaPath() {
  return path.join(getDriverPath(), "schema");
}

/**
 *
 * @constructor
 */

function Database() {}

util.inherits(Database, EventEmitter);

/**
 * starts the database connection
 *
 * @abstract
 */
Database.prototype.connect = function () {
  logger.log("warn", "Database.connect must be implemented by extending object!");
  throw new Error("Database.connect must be implemented by extending object!");
};

/**
 * closes the database connection
 *
 * @param {callback} next
 * @abstract
 */
Database.prototype.disconnect = function (next) {
  logger.log("warn", "Database.disconnect must be implemented by extending object!");
  throw new Error("Database.disconnect must be implemented by extending object!");
};

/**
 * should check if this database instance is up to date with the passed tenant
 *
 * @abstract
 */
Database.prototype.isStale = function (tenant) {
  logger.log("warn", "Database.isStale must be implemented by extending object!");
  throw new Error("Database.isStale must be implemented by extending object!");
};

Database.prototype.isValidIdentifier = function (id) {
  logger.log("warn", "Database.isValidIdentifier must be implemented by extending object!");
  throw new Error("Database.isValidIdentifier must be implemented by extending object!");
};

/**
 * loads any schemas from the specified location
 *
 * @abstract
 * @param {string} schemaDirectory - the directory from which to load schemas
 * @param {function} callback - Callback function to be called once all schemas are loaded
 */
Database.prototype.loadSchemas = function (schemaDirectory, callback) {
  logger.log("warn", "Database.loadSchemas must be implemented by extending object!");
  throw new Error("Database.loadSchemas must be implemented by extending object!");
};

/**
 * add a new database model from json schema uses Database#importSchema
 *
 * @param {string} modelName - case insensitive
 * @param {object} schema - json object
 * @param {callback} [next] - utility callback
 */

Database.prototype.addModel = function (modelName, schema, next) {
  if ("function" !== typeof next) {
    next = function (err, schema) {
      /* does nothing */
    };
  }

  // uri is required to handle errors with self referencing schema
  var uri = "http://localhost/system/" + modelName + ".schema";
  var self = this;
  self.importSchema(uri, schema, function (err, importedSchema) {
    if (err) {
      return next(err);
    }
    try {
      self.addSchema(modelName, importedSchema);
    } catch (e) {
      return next(e);
    }
    next(null, importedSchema);
  });
};

/**
 * adds the schema output from a schema import to the db
 *
 * @param {string} modelName
 * @param {object} orm
 */

Database.prototype.addSchema = function (modelName, schema) {
  logger.log("warn", "Database#addSchema must be implemented by extending object!");
  throw new Error("Database#addSchema must be implemented by extending object!");
};

/**
 * retrieves a model from the known model collection
 *
 * @param {string} modelName - the name of the model to retrieve
 * @return {object} model
 */

Database.prototype.getModel = function (modelName) {
  logger.log("warn", "Database#getModel must be implemented by extending object!");
  throw new Error("Database#getModel must be implemented by extending object!");
};

/**
 * retrieves all models from the model collection
 *
 * @param {string} modelName - the name of the model to retrieve
 * @return {object} model
 */

Database.prototype.getModelNames = function () {
  logger.log("warn", "Database#getModelNames must be implemented by extending object!");
  throw new Error("Database#getModelNames must be implemented by extending object!");
};

/**
 * generate a populator object from passed options
 *
 * @param {object} options
 * @return {object} populate object that can be passed to Database#retrieve
 */
Database.prototype.buildPopulator = function (options) {
  logger.log("warn", "Database#buildPopulator must be implemented by extending object!");
  throw new Error("Database#buildPopulator must be implemented by extending object!");
};

/**
 * generate a query from an options object
 *
 * @param {object} options
 * @return {object} query object that can be passed to Database#retrieve
 */
Database.prototype.buildQuery = function (options) {
  logger.log("warn", "Database#buildQuery must be implemented by extending object!");
  throw new Error("Database#buildQuery must be implemented by extending object!");
};

/**
 * creates a new object of specified type and inserts into the database
 *
 * @param {string} objectType - the type of object to create, e.g. 'user'
 * @param {object} objectData - the data that defines the object
 * @param {function} callback - of the form function (error, results) ...
 */
Database.prototype.create = function (objectType, objectData, callback) {
  logger.log("warn", "Database#create must be implemented by extending object!");
  callback(new Error("Database#create not implemented"));
};

/**
 * retrieves an object or objects of specified type based on search params
 *
 * @param {string} objectType - the type of object to find, e.g. 'user'
 * @param {object} search
 * @param {object} [options]
 * @param {function} callback - of the form function (error, results) ...
 */
Database.prototype.retrieve = function (objectType, search, options, callback) {
  logger.log("warn", "Database#retrieve must be implemented by extending object!");
  callback(new Error("Database#retrieve not implemented"));
};

/**
 * retrieves a single object of specified type based on search params
 *
 * @param {string} objectType - the type of object to find, e.g. 'user'
 * @param {object} search
 * @param {object} [options]
 * @param {function} callback - of the form function (error, results) ...
 */
Database.prototype.retrieveOne = function (objectType, search, options, callback) {
  logger.log("warn", "Database#retrieve must be implemented by extending object!");
  callback(new Error("Database#retrieve not implemented"));
};

/**
 * updates an object of specified type with objectData
 *
 * @param {string} objectType - the type of object to update, e.g. 'user'
 * @param {object} conditions - update objects that match these conditions; should use uniqueid
 * @param {object} updateData - the data to update the object with
 * @param {function} callback - of the form function (error, results) ...
 */
Database.prototype.update = function (objectType, conditions, updateData, callback) {
  logger.log("warn", "Database#update must be implemented by extending object!");
  callback(new Error("Database#update not implemented"));
};

/**
 * deletes an object of specified type identified by objectData
 *
 * @param {string} objectType - the type of object to delete, e.g. 'user'
 * @param {object} conditions - update objects that match these conditions; should use uniqueid
 * @param {function} callback - of the form function (error) ...
 */
Database.prototype.destroy = function (objectType, conditions, callback) {
  logger.log("warn", "Database#destroy must be implemented by extending object!");
  callback(new Error("Database#destroy not implemented"));
};

/**
 * All database implmentations need to understand how to translate our schema
 *
 * @throws error if not implemented
 * @param {string} uri
 * @param {object} a schema to import
 * @param {callback} next
 */
Database.prototype.importSchema = function (uri, schema, next) {
  logger.log("warn", "Database#importSchema must be implemented by extending object!");
  throw new Error("Database#importSchema not implemented");
};

/**
 * All database implmentations need to understand how to export our schema
 *
 * @throws error if not implemented
 * @param {object|array} results
 */
Database.prototype.exportResults = function (results, next) {
  logger.log("warn", "Database#exportResults must be implemented by extending object!");
  throw new Error("Database#exportResults not implemented");
};

/**
 * resolves a schema path, returns an fs path for special cases
 *
 * @param {string} uri
 * @returns {string} local path if local, false
 */
function resolveSchemaPath(uri) {
  var local = "http://localhost/";
  var pathMap = {
    system: path.join(configuration.serverRoot, "lib", "dml", "schema", "system"),
    plugins: path.join(configuration.serverRoot, "plugins"),
  };

  if (uri.substr(0, local.length) === local) {
    // special case get from fs
    var localPath = uri.substr(local.length);
    var pathType = localPath.substr(0, localPath.indexOf("/"));
    if ("string" === typeof pathMap[pathType]) {
      return path.join(pathMap[pathType], localPath.substr(pathType.length).replace(/\//g, path.sep));
    }
  }

  // could not resolve
  logger.log("info", "could not resolve uri to local path: " + uri);
  return false;
}

/**
 * allows addition of callbacks for varions database hooks
 *
 * @param {string} eventType - type of the event to hook
 * @param {callback}
 */

function addDatabaseHook(eventType, callback) {
  if (_dbHooks[eventType]) {
    _dbHooks[eventType].push(callback);
  }
}

/**
 * processes hooks for a database instance
 *
 * @param {object} dbInstance - a database instance
 * @param {callback} next
 */

function processDatabaseHooks(eventType, dbInstance, next) {
  if (!_dbHooks[eventType]) {
    return next(null);
  }

  async.eachSeries(
    _dbHooks[eventType],
    function (hook, cb) {
      hook(dbInstance, cb);
    },
    next,
  );
}

/**
 * instantiates a database of the specified type using the tenant connection
 * details
 *
 * @param {string} type - e.g. 'mongoose'
 * @param {object} dbConfig - database config
 * @param {callback} next
 */
function createDatabaseInstance(type, dbConfig, next) {
  const dbPath = path.join(getDriverPath(), type);
  let clsDB;
  try {
    clsDB = require(dbPath);
  } catch (error) {
    logger.log("error", error);
    return next(new errors.notthere(dbPath));
  }
  _databases[type][dbConfig.dbName] = {
    readyState: ReadyStates.WAITING, // indicate we're trying to connect
  };
  const dbInstance = new clsDB();

  dbInstance.connect(dbConfig).then(function () {
    logger.log("info", "Connection established: " + dbConfig.dbName);

    dbInstance.loadSchemas(path.join(getSchemaPath(), "system"), function (error) {
      processDatabaseHooks("create", dbInstance, function (err) {
        if (err) {
          // delete the connection instance so we can try again next time
          delete _databases[type][dbConfig.dbName];
          return next(err);
        }
        dbInstance.readyState = ReadyStates.READY;
        _databases[type][dbConfig.dbName] = dbInstance;
        app.emit("create:database", dbInstance);
        next(null, dbInstance);
      });
    });
  }, next);
}

/**
 * Creates a database instance if it does not exists, otherwise returns the current database instance
 *
 * @param {function} next - callback to be fired with the database object
 * @param {string} tenantId - (optional) specifies a tenant to use
 * @param {string} type - (optional) the type of database connector to use (e.g 'mongoose')
 */
function getDatabase(next, tenantId, type) {
  const { dbName, dbType, masterTenantID } = configuration.getConfig();

  if ("function" !== typeof next) {
    logger.log("error", "getDatabase called without callback function");
    return next(new errors.nocallback("getDatabase"));
  }
  if (!tenantId) {
    try {
      tenantId = app.usermanager.getCurrentUser().tenant._id;
    } catch (e) {
      logger.audit("error", { event: "database", message: e.message, error: e.stack.replace(/\n/g, "") });
      return next(new Error("Failed to determine user's tenant!"));
    }
  }
  if (!type) {
    type = dbType;
  }
  if (!_databases[type]) {
    _databases[type] = {};
  }
  // master tenant can be accessed by ID or name
  if (tenantId === dbName || tenantId === masterTenantID) {
    return _handleMasterDB(type, next);
  }
  _handleSlaveDB(type, tenantId, next);
}

function _handleMasterDB(type, next) {
  const { dbName, dbHost, dbUser, dbPass, dbPort } = configuration.getConfig();
  const db = _databases[type][dbName];

  if (db) {
    // db instance already exists
    if (db.readyState === ReadyStates.READY) {
      // ...and is connected
      return next(null, db);
    }
    // db instance is still connecting, so wait until this is done
    return app.on("create:masterdatabase", (db) => next(null, db));
  }
  createDatabaseInstance(type, { dbName, dbHost, dbUser, dbPass, dbPort }, (err, db) => {
    if (err) {
      logger.log("error", err);
      return next(err);
    }
    if (!db) {
      return next(new Error("Failed to create master database"));
    }
    db.isMaster = true;
    db.addModel(
      "review",
      {
        properties: {
          description: {
            type: "string",
          },
          courseId: {
            type: "string",
          },
          createdBy: {
            type: "string",
          },
          createdAt: {
            type: "string",
          },
          priority: {
            type: "string",
          },
        },
      },
      function (err, fullSchema) {
        if (err) {
          logger.log("error", "Error creating review schema: " + err.message, err);
        } else {
          logger.log("info", "Review model created successfully!");
        }
      },
    );
    db.addModel(
      "backup",
      {
        properties: {
          description: {
            type: "string",
          },
          createdBy: {
            type: "string",
          },
          createdAt: {
            type: "string",
          },
          title: {
            type: "string",
          },
          backupOf: {
            type: "string",
          },
          backupPath: {
            type: "string",
          },
        },
      },
      function (err, fullSchema) {
        if (err) {
          logger.log("error", "Error creating backup schema: " + err.message, err);
        } else {
          logger.log("info", "Backup model created successfully!");
        }
      },
    );
    db.addSchema(
      "userotp",
      new Schema({
        userId: String,
        username: String,
        otp: String,
        createdAt: Date,
        expiresAt: Date,
      }),
    );
    db.addModel(
      "session",
      {
        properties: {
          expires: {
            type: "string",
          },
          session: {
            type: "object",
          },
        },
      },
      function (err, fullSchema) {
        if (err) {
          logger.log("error", "Error creating session schema: " + err.message, err);
        } else {
          logger.log("info", "Session model created successfully!");
        }
      },
    );
    // db.addModel("userotp", userotpSchema, function (err, fullSchema) {
    //   if (err) {
    //     logger.log("error", "Error creating otp schema: " + err.message, err);
    //   } else {
    //     logger.log("info", "userotp model created successfully!");
    //   }
    // });

    // broadcast that connection to the master database has been established.
    app.emit("create:masterdatabase", db);
    next(null, db);
  });
}

function _handleSlaveDB(type, tenantId, next) {
  // need to fetch tenant info to ensure that db connection is not stale
  app.tenantmanager.retrieveTenant({ _id: tenantId }, function (err, tenant) {
    if (!tenant && !err) err = "Error: Tenant not found in database, Not able to retrive tenant from database.";
    if (err) {
      logger.log("error", err);
      return next(err);
    }
    const dbInstance = _databases[type][tenant.database.dbName];
    const { dbName, dbHost, dbUser, dbPass, dbPort, dbType } = configuration.getConfig();
    if (
      type === dbType &&
      tenant.database.dbHost === dbHost &&
      tenant.database.dbName === dbName &&
      tenant.database.dbPass === dbPass &&
      tenant.database.dbPort === dbPort &&
      tenant.database.dbUser === dbUser
    ) {
      return _handleMasterDB(type, next);
    }
    if (dbInstance) {
      try {
        if (!dbInstance.isStale(tenant)) {
          return next(null, dbInstance);
        }
        // database config has changed, need to reconnect
        dbInstance.disconnect();
        delete _databases[type][tenant.database];
      } catch {
        delete _databases[type][tenant.database];
      }
    }
    createDatabaseInstance(type, tenant.database, (err, db) => {
      if (err) {
        logger.log("error", err);
        return next(err);
      }
      if (!db) return next(new Error("Failed to create master database"));
      db.addModel(
        "backup",
        {
          properties: {
            description: {
              type: "string",
            },
            createdBy: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            title: {
              type: "string",
            },
            backupOf: {
              type: "string",
            },
            backupPath: {
              type: "string",
            },
          },
        },
        function (err) {
          if (err) return next(err);
          else return next(null, db);
        },
      );
    });
  });
}

/**
 * Attempts to connect to the database, and returns an error on failure
 *
 * @param {callback} cb - function
 */
function checkConnection(cb) {
  const { dbName, dbHost, dbPort, dbConnectionUri } = configuration.getConfig();

  const haveConnectionConfig = dbConnectionUri || (dbHost && dbPort) ? true : false;

  if (!dbName || !haveConnectionConfig) {
    return cb("Cannot check database connection, missing settings in config.json.");
  }
  getDatabase(function (error, db) {
    if (error) {
      return cb(error);
    }
    if (db.conn.readyState !== 1) {
      return cb(`Cannot connect to the MongoDB '${dbName}' at '${dbHost}:${dbPort}'. Please check the details are correct and the database is running.`);
    }
    cb();
  }, dbName);
}

/**
 * returns a list of available drivers
 *
 * @param {callback} cb - function that receives an array of driver names
 */
function getAvailableDrivers(cb) {
  fs.readdir(getDriverPath(), function (error, files) {
    if (error) {
      return cb(error);
    }

    var drivers = [];
    files.forEach(function (filename) {
      if ("schema" !== filename) {
        drivers.push(filename);
      }
    });

    return cb(null, drivers);
  });
}

/**
 * returns a list of available drivers
 *
 * @param {callback} cb - function that receives an array of driver names
 */
function getAvailableDriversSync() {
  files = fs.readdirSync(getDriverPath());
  var drivers = [];
  files.forEach(function (filename) {
    if ("schema" !== filename) {
      drivers.push(filename);
    }
  });

  return drivers;
}

/**
 * preload function sets up event listener for startup events
 *
 * @param {object} app - the Origin instance
 * @return {object} preloader - a ModulePreloader
 */
function preload(app) {
  var preloader = new app.ModulePreloader(app, MODNAME, { events: preloadHandle(app, this) });
  return preloader;
}

/**
 * Event handler for preload events
 *
 * @param {object} app Server instance
 * @param {object} instance Instance of this module
 */
function preloadHandle(app, instance) {
  return {
    preload: function () {
      this.emit("preloadChange", MODNAME, app.preloadConstants.WAITING);
    },
    moduleLoaded: function (modloaded) {
      if (modloaded !== WAITFOR) {
        // not the module that loaded this module's requirement
        return;
      }
      instance.getDatabase(function (err, db) {
        if (err) {
          return logger.log("error", "failed to set app.db", err);
        }
        app.db = db;
      }, configuration.getConfig("dbName"));
      // we proceed with minimal server
      this.emit("preloadChange", MODNAME, app.preloadConstants.COMPLETE);
    },
  };
}

/**
 * Module exports
 */
module.exports.addDatabaseHook = addDatabaseHook;
module.exports.getDatabase = getDatabase;
module.exports.checkConnection = checkConnection;
module.exports.resolveSchemaPath = resolveSchemaPath;
module.exports.getAvailableDrivers = getAvailableDrivers;
module.exports.getAvailableDriversSync = getAvailableDriversSync;
module.exports.Database = Database;
module.exports.preload = preload;
