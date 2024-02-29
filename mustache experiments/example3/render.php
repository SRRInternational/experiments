<?php

require 'vendor/autoload.php'; // Require Mustache.php

// Read the Mustache template
$template = file_get_contents('index.mustache');

// Read the data file
$data = file_get_contents('data.json');
$booksData = json_decode($data, true);

// Create Mustache engine
$mustache = new Mustache_Engine();

// Render the template with the data
echo $mustache->render($template, $booksData);
