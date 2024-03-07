<?php
require_once "connection.php";
session_start();
if (isset($_SESSION['username'])) {
    header("Location: index.php");
    exit(); // Add exit here to prevent further execution
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <!-- Include Tailwind CSS -->

    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-blue-100/25 flex justify-center items-center h-screen flex-col">

    <div class="bg-white flex gap-4 p-8 justify-between w-[1100px] rounded-3xl shadow-md">
        <div class="space-y-5 flex flex-col w-full">
            <div class="w-16 h-16 ">
                <image src="./images/logo.png" class="object-cover w-full h-full" alt="google" />
            </div>
            <P class=" text-3xl font-normal">Login to Your Account</P>
            <p class="text-2xl">Enter Your Details</p>

        </div>
        <form method="post" enctype="multipart/form-data" class="flex flex-col justify-center w-full">

            <div class="my-3">
                <div class="bg-white rounded-lg">
                    <div class="relative bg-inherit">
                        <input type="text" name="username" id="username" class="peer bg-transparent h-10 w-full rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Username" /><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Username</label>
                    </div>
                </div>
            </div>
            <div class="my-3">
                <div class="bg-white rounded-lg">
                    <div class="relative bg-inherit">
                        <input type="password" id="password" name="password" class="peer bg-transparent h-10 w-full rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" /><label for="password" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter Your Password</label>
                    </div>
                </div>
            </div>

            <div class=" w-full mt-4 flex items-end justify-end gap-2 ">
                <button class="self-end  bg-transparent text-blue-600 py-2 px-4 rounded-3xl hover:bg-gray-200/50 font-medium">
                    <a href="signup.php">Create Account</a>
                </button>
                <button type="submit" class="self-end  bg-blue-700 text-white py-2 px-4 rounded-3xl hover:bg-blue-600">Log in</button>
            </div>
        </form>
    </div>
    <div class=" flex justify-between w-[1100px] mt-2">
        <form class="max-w-[200px] w-full">
            <select id="countries" class="bg-transparent hover:bg-gray-300/50 border-2 border-transparent text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-2.5">
                <option selected>English (United Kingdon)</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </form>
        <div class=" flex gap-4">
            <button class="text-xs hover:bg-gray-300/50 py-1 px-4 rounded-xl">Help</button>
            <button class="text-xs hover:bg-gray-300/50 py-1 px-4 rounded-xl">Privacy</button>
            <button class="text-xs hover:bg-gray-300/50 py-1 px-4 rounded-xl">Term </button>
        </div>
    </div>


</body>

<?php
// Check if the form is submitted, validate the data, and add the user in the database
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login'])) {
        // Handle login
        $username = $_POST['username'];
        $password = $_POST['password'];

        // SQL query to retrieve user information based on the username
        $query = "SELECT * FROM user WHERE username='$username'";
        $result = mysqli_query($conn, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);
            // Verify password
            if (password_verify($password, $user['password'])) {
                // Password is correct, start session and redirect to admin panel
                session_start();
                $_SESSION['username'] = $username;
                header("Location: index.php");
                exit();
            } else {
                // Incorrect password
                echo "Incorrect username or password.";
            }
        } else {
            // User not found
            echo "User not found.";
        }
    }
}
?>

</html>