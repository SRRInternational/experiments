<?php
require 'vendor/autoload.php'; // Require Mustache.php

// Read the Mustache template
$template = file_get_contents('greetingTemplate.mustache');

// Get name from form submission
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];





// Create Mustache engine
$mustache = new Mustache_Engine();

// Render the template with the provided data
echo $mustache->render($template, ['name' => $name, 'email' => $email, 'mobile' => $mobile]);
