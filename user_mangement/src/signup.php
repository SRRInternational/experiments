<?php
require_once "./connection.php";
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
                <div class="bg-white rounded-lg">
                    <div class="relative bg-inherit">
                        <input type="text" name="username" id="username" class="peer bg-transparent h-10 w-full rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Username" /><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Username</label>
                    </div>
                </div>
            </div>

            <div class="my-4">
                <div class="bg-white rounded-lg">
                    <div class="relative bg-inherit">
                        <input type="email" id="email" name="email" class="peer bg-transparent h-10 w-full rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" /><label for="email" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email</label>
                    </div>
                </div>
            </div>

            <div class="my-4">
                <div class="bg-white rounded-lg">
                    <div class="relative bg-inherit">
                        <input type="password" id="password" name="password" class="peer bg-transparent h-10 w-full rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" /><label for="password" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter Your Password</label>
                    </div>
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
    $target_dir = "./uploads/";
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
                header("Location: index.php");
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