<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Menu (PHP)</title>
</head>
<body>
    <div id="app" x-data="{ isOpen: false }">
        <h1>Dropdown Menu (PHP)</h1>

        <!-- Dropdown Button -->
        <button @click="isOpen = !isOpen">Toggle Dropdown</button>

        <!-- Dropdown Content (hidden by default) -->
        <div x-show="isOpen">
            <ul>
                <?php
                // Generate dropdown options dynamically using PHP
                $options = ['Option 1', 'Option 2', 'Option 3'];
                foreach ($options as $option) {
                    echo "<li>$option</li>";
                }
                ?>
            </ul>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.js" defer></script>
</body>
</html>
