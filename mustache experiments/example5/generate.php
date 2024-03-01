<?php
require 'vendor/autoload.php'; // Require Mustache.php

// Read the Mustache template
$template = file_get_contents('foodList.mustache');

// Get user input from form submission
$food = $_POST['food'];

// Read existing data file or create a new one
$dataFile = 'foods.json';
$foods = file_exists($dataFile) ? json_decode(file_get_contents($dataFile), true) : [];

// Add new food to the list
$foods[] = $food;

// Write updated data back to file
file_put_contents($dataFile, json_encode($foods));

// Create Mustache engine
$mustache = new Mustache_Engine();

// Render the template with the provided data
echo $mustache->render($template, ['foods' => $foods]);
?>
