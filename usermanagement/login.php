<?php
require_once "connection.php";
session_start();
if (isset($_SESSION['username'])) {
    header("Location: AdminPanel.php");
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
                <div class="relative w-full h-10">
                    <input name="email" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-gray-800 focus:border-t-transparent text-m px-3 py-2.5 rounded-[7px] border-gray-800 focus:border-blue-600" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-600 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-600 peer-focus:after:!border-blue-600">Email
                    </label>
                </div>
            </div>
            <div class="my-3">
                <div class="relative w-full h-10 ">
                    <input name="password" type="password" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-gray-800 focus:border-t-transparent text-m px-3 py-2.5 rounded-[7px] border-gray-800 focus:border-blue-600" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-600 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-600 peer-focus:after:!border-blue-600">Password
                    </label>
                </div>
            </div>

            <div class=" w-full mt-4 flex items-end justify-end ">
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
                header("Location: AdminPanel.php");
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