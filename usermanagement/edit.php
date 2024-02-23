<?php
require_once "connection.php";
require_once "classes/crud.php";
session_start();
// Fetch user details if the username is provided
$userDetails = null;
if (isset($_GET['username'])) {
    $username = $_GET['username'];
    $userCRUD = new UserCRUD($conn);
    $userDetails = $userCRUD->getUserByUsername($username);
    if (!$userDetails) {
        echo "User not found.";
        exit;
    }
} else {
    echo "Username not provided.";
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit User</title>
    <!-- Include Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-slate-200">
    <!-- Header Section -->
    <div class="flex justify-between p-4 items-center bg-blue-300">
        <h1 class="font-bold text-3xl">Edit User - <?php echo $userDetails['username']; ?></h1>
        <!-- Back to Admin Panel Link -->
        <a href="AdminPanel.php" class="bg-blue-400 p-2 rounded-md text-white font-bold">Back to Admin Panel</a>
    </div>

    <!-- Form for Editing User Details -->
    <div class="container mx-auto p-8">
        <form method="POST" action="" enctype="multipart/form-data"> <!-- Correct the action attribute and add enctype for file upload -->
            <input type="hidden" name="username" value="<?php echo $userDetails['username']; ?>">
            <div class="mb-4 space-y-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name="email" value="<?php echo $userDetails['email']; ?>">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label> <!-- Change id to username -->
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="username" value="<?php echo $userDetails['username']; ?>"> <!-- Change id to username -->
                <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Profile Image</label>
                <input type="file" name="image" id="image" value="<?php echo $userDetails['image']; ?> class=" mt-1 block w-full"> <!-- Add input field for image upload -->
            </div>
            <!-- Add more input fields for other user details as needed -->
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" name="submit">Update</button>
            </div>
        </form>
    </div>


    <?php

    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];

        // Handle image upload
        if ($_FILES['image']['name']) {
            $image_path = "uploads/" . $_FILES['image']['name'];
            move_uploaded_file($_FILES['image']['tmp_name'], $image_path);
        } else {
            // If no image is uploaded, retain the existing image path
            $image_path = $userDetails['image'];
        }

        $userCRUD = new UserCRUD($conn);
        if ($userCRUD->updateUser($username, $email, $image_path)) {
            header("Location: AdminPanel.php");

            echo "User updated successfully.";
        } else {
            echo "Error occurred during user update.";
        }
    } else {
        echo "No data received.";
    }
    ?>



</body>

</html>