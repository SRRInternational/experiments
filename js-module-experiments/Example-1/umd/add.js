(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser global (root is window)
        root.add = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    return function (a, b) {
        return a + b;
    };
}));
