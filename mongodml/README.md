Create program to replicate the following code:

```
db.retrieve(pluginType.collectionType, { _tenantId: usermanager.getCurrentUser().tenant._id }, function (err, results) {
              if (err) return callback(err);
              // iterate through all plugins for current type
              async.eachSeries(
                results,
                function (schema, innerCallback) {
                  processPlugin(pluginType, schema, memo, innerCallback);
                },
                outerCallback,
              );
            });
```


## Reason for Change

After upgrading Mongoose from version 5.8.13 to 8.10.0, the `processPluginLocations` function stopped behaving as expected. Specifically, for the plugin type `extension`, the function was returning `undefined` when the extension was not present. A logic update was added to ensure it returns an empty array instead.

## Code Changes

[GitHub commit link](https://github.com/SRRInternational/adapt_authoring/commit/c7a080e17e258af3d919126a3c1c88e41d8281d2)

To isolate the issue, I also debugged the `processPluginLocations` function before updating Mongoose. In the earlier version, it correctly returned an empty array when the extension plugin was not found.
