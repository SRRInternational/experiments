<?php
require_once "./connection.php";
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

if (isset($_GET['username'])) {
    $username = $_GET['username'];

    // Fetch user details based on the username
    $sql = "SELECT * FROM user WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
    } else {
        echo "User not found.";
        exit();
    }
} else {
    echo "Username not provided.";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form submission and update user details
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $country = $_POST['country'];
    $bio = $_POST['bio'];

    // Update user details in the database
    $updateQuery = "UPDATE user SET email = '$email', mobile = '$mobile', country = '$country', bio = '$bio' WHERE username = '$username'";
    if (mysqli_query($conn, $updateQuery)) {
        echo "<script>alert('User details updated successfully');</script>";
    } else {
        echo "<script>alert('Failed to update user details');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit User Details</title>
    <!-- Include Tailwind CSS -->
    <link href="../output.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-4">Edit User Details</h1>
        <form method="post" class="max-w-md mx-auto">
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value="<?php echo $row['email']; ?>" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Mobile</label>
                <input type="text" name="mobile" value="<?php echo $row['mobile']; ?>" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" name="country" value="<?php echo $row['country']; ?>" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Bio</label>
                <textarea name="bio" rows="4" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"><?php echo $row['bio']; ?></textarea>
            </div>
            <div class="mb-4">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Update</button>
            </div>
        </form>
    </div>
</body>

</html>