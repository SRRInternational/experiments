
# README.md

## Backbone.js Example

This repository contains a simple HTML file demonstrating the usage of Backbone.js along with jQuery, jQuery UI, and Underscore.js. The main purpose is to showcase a basic setup and initialization of a Backbone model.

### Prerequisites

Make sure you have the following libraries included in your project:

- jQuery 3.6.0
- jQuery UI 1.13.1
- Underscore.js 1.3.3
- Backbone.js 0.9.2

htmlCopy code

`<script src="https://code.jquery.com/jquery-3.6.0.js"></script> <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js"></script>`

### Usage

1. Include the required libraries in your HTML file.
2. Copy and paste the following script to initialize a simple Backbone model:

htmlCopy code

`<script>     person = Backbone.Model.extend({         initialize: function(){             console.log("hello");         }     });      var backbone = new person(); </script>`

This script defines a `person` model using Backbone.js, and upon instantiation, it logs "hello" to the console.

### License

This example is provided under the MIT License. Feel free to modify and use it in your projects.