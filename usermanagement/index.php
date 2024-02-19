<?php
require_once "connection.php";
session_start();
if (isset($_SESSION['username'])) {
    echo "You are already logged in";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <!-- Include Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-200 flex justify-center items-center h-screen">

    <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6">Login Form</h2>
        <form method="post">
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
                <input type="text" name="username" placeholder="Enter Your Username" id="username" class="mt-1 p-2 block w-full ring-1 ring-black rounded-md border-gray-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                <input type="password" name="password" placeholder="Enter Your password" id="password" class="mt-1 p-2 block ring-1 ring-black w-full rounded-md border-gray-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
            </div>
            <div class="mb-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
            </div>
        </form>
    </div>

</body>

<?php
//  check if the form is submitted  validate the data and add the user in databae it should also check if the user is already in the database if there is no user then it should insert a user in database

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        session_start();
        $_SESSION['username'] = $username;
        header("Location: AdminPanel.php");
    } else {
        $query = "INSERT INTO user (username, password) VALUES ('$username', '$password')";
        if (mysqli_query($conn, $query)) {
            echo "You are registered and logged in";
            session_start();
            $_SESSION['username'] = $username;
            header("Location: AdminPanel.php");
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($conn);
        }
    }
}



?>

</html>