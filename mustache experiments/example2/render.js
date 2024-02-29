const fs = require('fs');
const mustache = require('mustache');

// Read the template file
const template = fs.readFileSync('index.html', 'utf8');

// Read the data file
const data = fs.readFileSync('data.json', 'utf8');

// Parse JSON data
const jsonData = JSON.parse(data);

// Render the template with the data
const output = mustache.render(template, jsonData);

// Output the rendered HTML
console.log(output);
