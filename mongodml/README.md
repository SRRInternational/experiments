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

