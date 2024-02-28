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

<body class="bg-blue-100/25 flex flex-col justify-center items-center h-screen">



    <div class="bg-white flex gap-4 p-8 justify-between w-[1100px] rounded-3xl shadow-md">
        <div class="space-y-5 flex flex-col w-full">
            <div class="w-16 h-16 ">
                <image src="./images/logo.png" class="object-cover w-full h-full" alt="google" />
            </div>
            <P class=" text-3xl font-normal">Create Your Account</P>
            <p class="text-2xl">Enter Your Details</p>

        </div>
        <form class="w-full" method="post" enctype="multipart/form-data">
            <div class="my-4">
                <div class="relative w-full h-10 ">
                    <input name="username" type="password" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-gray-800 focus:border-t-transparent text-m px-3 py-2.5 rounded-[7px] border-gray-800 focus:border-blue-600" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-600 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-600 peer-focus:after:!border-blue-600">Username
                    </label>
                </div>
            </div>

            <div class="my-4">
                <div class="relative w-full h-10 ">
                    <input name="email" type="password" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-gray-800 focus:border-t-transparent text-m px-3 py-2.5 rounded-[7px] border-gray-800 focus:border-blue-600" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-600 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-600 peer-focus:after:!border-blue-600">Email
                    </label>
                </div>
            </div>

            <div class="my-4">
                <div class="relative w-full h-10 ">
                    <input name="password" type="password" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-gray-800 focus:border-t-transparent text-m px-3 py-2.5 rounded-[7px] border-gray-800 focus:border-blue-600" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-600 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-600 peer-focus:after:!border-blue-600">Password
                    </label>
                </div>
            </div>

            <div class="mb-3">
                <label class="mb-2 block text-sm font-medium text-black ">
                    Attach file
                </label>
                <input type="file" name="image" class="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-none file:cursor-pointer file:border-0 file:border-r  file:border-stroke file:bg-whiter file:px-5 file:py-2 file:hover:bg-blue-600 file:hover:bg-opacity-10 focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter " />
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
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    // Encrypt the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Process image upload
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if ($check !== false) {
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES["image"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if (
        $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif"
    ) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            echo "The file " . htmlspecialchars(basename($_FILES["image"]["name"])) . " has been uploaded.";
            // SQL query to insert a new user with default CreatedAt time
            $query = "INSERT INTO user (email, username, password, image) VALUES ('$email', '$username', '$hashed_password', '$target_file')";

            if (mysqli_query($conn, $query)) {
                // User registered successfully, start the session and redirect to admin panel
                $_SESSION['username'] = $username;
                header("Location: AdminPanel.php");
                exit();
            } else {
                // Error occurred during registration
                echo "Error: " . $query . "<br>" . mysqli_error($conn);
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>

</html>