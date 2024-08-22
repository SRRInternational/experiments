define(['underscore'], function(_) {
    var initialize = function() {
        var numbers = [1, 2, 3, 4, 5];
        var doubledNumbers = _.map(numbers, function(num) { return num * 2; });
        console.log('Doubled Numbers:', doubledNumbers);
    };

    return {
        initialize: initialize
    };
});
