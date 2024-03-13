<?php
require_once "./connection.php";
require_once "../src/classes/crud.php";
require_once "../vendor/autoload.php";
session_start();
$mustache = new Mustache_Engine;
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
$userHandler = new UserCRUD($conn);

if (isset($_GET['username'])) {
    $username = $_GET['username'];

    $userInfo = $userHandler->getUserByUsername($username);
    $currentLoggedInUser = $userHandler->getUserFromSession();

    if ($currentLoggedInUser['isAdmin'] === 0) {
        header("Location: index.php");
        exit();
    }
} else {
    echo "Username not provided.";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form submission and update user details
    $imagepath = $userInfo['image'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $country = $_POST['country'];
    $bio = $_POST['bio'];

    // Update user details in the database
    if ($userHandler->updateUser($username, $email, $imagepath, $firstname, $lastname, $mobile, $country, $bio)) {
        // User updated successfully
        header("Location: index.php");
        exit();
    } else {
        // Error occurred during user update
        echo "Error occurred during user update";
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.10.3/cdn.js" integrity="sha512-KnYVZoWDMDmJwjmoUEcEd//9bap1dhg0ltiMWtdoKwvVdmEFZGoKsFhYBzuwP2v2iHGnstBor8tjPcFQNgI5cA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body x-data="{ page: 'ecommerce', 'loaded': true, 'darkMode': true, 'stickyMenu': false, 'sidebarToggle': false, 'scrollTop': false }" x-init="
         darkMode = JSON.parse(localStorage.getItem('darkMode'));
         $watch('darkMode', value => localStorage.setItem('darkMode', JSON.stringify(value)))" :class="{'dark text-bodydark bg-boxdark-2': darkMode === true}">
    <!-- ===== Preloader Start ===== -->
    <!-- <include src="./partials/preloader.html"></include> -->
    <?php include './partials/preloader.php'; ?>

    <!-- ===== Preloader End ===== -->

    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
        <!-- ===== Sidebar Start ===== -->

        <!-- <include src="./partials/sidebar.html"></include> -->
        <?php include './partials/sidebar.php'; ?>
        <!-- ===== Sidebar End ===== -->

        <!-- ===== Content Area Start ===== -->
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <!-- ===== Header Start ===== -->
            <!-- <include src="./partials/header.html" /> -->
            <?php include './partials/header.php'; ?>
            <!-- ===== Header End ===== -->

            <!-- ===== Main Content Start ===== -->
            <main class="p-4">
                <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">


                    <!-- Breadcrumb Start -->

                    <!-- Breadcrumb End -->

                    <!-- ====== Form Layout Section Start -->

                    <!-- Contact Form -->
                    <div class=" w-full mx-auto rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
                        <div class=" px-6.5 py-6 ">
                            <h3 class="font-semibold text-2xl text-black dark:text-white">
                                User Details
                            </h3>
                        </div>
                        <?php
                        $data = [
                            'firstname' => $userInfo['firstname'],
                            'lastname' => $userInfo['lastname'],
                            'email' => $userInfo['email'],
                            'mobile' => $userInfo['mobile'],
                            'country' => $userInfo['country'],
                            'bio' => $userInfo['bio']
                        ];
                        echo $mustache->render(file_get_contents('./templates/edit.mustache'), $data);
                        ?>

                    </div>

                    <!-- ====== Form Layout Section End -->
                </div>
            </main>
            <!-- ===== Main Content End ===== -->
        </div>
        <!-- ===== Content Area End ===== -->
    </div>
    <!-- ===== Page Wrapper End ===== -->




</body>

<!-- <body class="bg-gray-100">
   
</body> -->

</html>