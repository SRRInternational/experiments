<?php
require_once "./connection.php";
require_once "../src/classes/crud.php";
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
$userHandler = new UserCRUD($conn);

if (isset($_GET['username'])) {
    $username = $_GET['username'];

    $userInfo = $userHandler->getUserByUsername($username);
    print_r($userInfo);
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
                        <form method="POST" enctype="multipart/form-data">
                            <div class="p-6.5">
                                <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div class="w-full xl:w-1/2">
                                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                            First name <span class="text-meta-1">*</span>
                                        </label>
                                        <input type="text" value="<?php echo $userInfo['firstname']; ?>" name="firstname" required placeholder="Enter your first name" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                    </div>

                                    <div class="w-full xl:w-1/2">
                                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Last name <span class="text-meta-1">*</span>
                                        </label>
                                        <input type="text" value="<?php echo $userInfo['lastname']; ?>" name="lastname" required placeholder="Enter your last name" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                    </div>
                                </div>

                                <div class="mb-4.5">
                                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Email <span class="text-meta-1">*</span>
                                    </label>
                                    <input type="email" name="email" value="<?php echo $userInfo['email']; ?>" required placeholder="Enter your email address" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                </div>

                                <div class="mb-4.5">
                                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Mobile No <span class="text-meta-1">*</span>
                                    </label>
                                    <input type="number" value="<?php echo $userInfo['mobile']; ?>" name="mobile" required placeholder="Enter Your Mobile No" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                </div>

                                <div class="mb-4.5">
                                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Country <span class="text-meta-1">*</span>
                                    </label>
                                    <div x-data="{ isOptionSelected: false }" class="relative z-20 bg-transparent dark:bg-form-input">
                                        <select name="country" value="<?php echo $userInfo['country']; ?>" required class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" :class="isOptionSelected && 'text-black dark:text-white'" @change="isOptionSelected = true">
                                            <option value="" class="text-body">
                                                Select Your Country <span class="text-meta-1">*</span>
                                            </option>
                                            <option value="India" class="text-body">India</option>
                                            <option value="USA" class="text-body">USA</option>
                                            <option value="UK" class="text-body">UK</option>
                                            <option value="Canada" class="text-body">Canada</option>
                                        </select>
                                        <span class="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                                            <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.8">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill=""></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div class="mb-6">
                                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Bio <span class="text-meta-1">*</span>
                                    </label>
                                    <textarea name="bio" required rows="6" placeholder="Enter You Bio" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"><?php echo $userInfo['bio']; ?></textarea>
                                </div>

                                <button class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    Submit
                                </button>
                            </div>
                        </form>
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