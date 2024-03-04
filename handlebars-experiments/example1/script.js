// Import Handlebars
const Handlebars = require('handlebars');

// Data for the template
const data = {
    title: 'Welcome to Handlebars',
    description: 'Handlebars is a powerful templating engine for JavaScript.'
};

// Compile the template
const source = document.getElementById('my-template').innerHTML;
const template = Handlebars.compile(source);

// Render the template with data
const html = template(data);

// Display the rendered HTML
document.getElementById('output').innerHTML = html;
