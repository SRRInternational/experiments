<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>

    <!-- Include Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-slate-200">
    <div class="flex justify-between p-4 items-center bg-blue-300">
        <h1 class="font-bold text-3xl">Welcome to Admin Panel - <?php echo $_SESSION['username'] ?></h1>
        <form method="POST">
            <button name="Logout" class="bg-blue-400 p-2 rounded-md text-white font-bold">Logout</button>
        </form>
    </div>

</body>
<?php

if (isset($_POST['Logout'])) {
    session_destroy();
    // Redirect to the login page
    header("Location: index.php");
}
?>

</html>