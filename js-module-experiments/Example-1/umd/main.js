// Check if module is running in Node.js
if (typeof require === 'function' && typeof module === 'object' && module.exports) {
    const add = require('./add');
    console.log(add(2, 3)); // Output: 5
} else if (typeof define === 'function' && define.amd) {
    // AMD
    require(['./add'], function (add) {
        console.log(add(2, 3)); // Output: 5
    });
} else {
    // Browser global
    console.log(add(2, 3)); // Output: 5
}
