const express = require("express");
const async = require("async");
const { getDatabase } = require("./lib/database");
const app = express();
const port = 3000;

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



const pluginType = {
  collectionType: "dummyCollection",
};

function processPlugin(pluginType, schema, memo, callback) {
  console.log(`Processing plugin: ${schema.name}`);
  callback();
}

function outerCallback(err) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("All plugins processed successfully");
  }
}

app.get("/", (req, res) => {
  getDatabase((err, db) => {
    if (err) {
      return res.status(500).json({ error: "Failed to get database" });
    }
    db.retrieve(
      pluginType.collectionType,
      { _tenantId: "679c693d2ed8c85d08d43929" },
      {},
      function (err, results) {
        if (err) {
          return res.status(500).json({ error: "Failed to retrieve data" });
        }

        async.eachSeries(
          results,
          function (schema, innerCallback) {
            processPlugin(pluginType, schema, {}, innerCallback);
          },
          function (err) {
            if (err) {
              return res
                .status(500)
                .json({ error: "Failed to process plugins" });
            }
            res.json({
              message: "All plugins processed successfully",
              results,
            });
          }
        );
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
