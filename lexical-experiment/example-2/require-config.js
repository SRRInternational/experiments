require.config({
    baseUrl: 'js',
    paths: {
        jquery: '../node_modules/jquery/dist/jquery.min',
        lexical: '../node_modules/lexical/dist/lexical.min'
    }
});

require(['app'], function(app) {
    app.init();
});
