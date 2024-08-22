require.config({
    paths: {
        'underscore': 'lib/underscore'
    }
});

require(['app'], function(app) {
    app.initialize();
});
