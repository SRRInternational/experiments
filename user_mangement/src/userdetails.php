<?php
require_once "./classes/crud.php";
require_once "connection.php";
session_start();
$userHandler = new UserCRUD($conn);

$userDetails = $userHandler->getUserFromSession();



// If user details exist, destructure them
if ($userDetails) {

    ['username' => $username, 'email' => $email, 'CreatedAt' => $createdAt, 'image' => $image] = $userDetails;
} else {
    // If user details are not available, initialize empty values
    echo "User details not found";
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $country = $_POST['country'];
    $bio = $_POST['bio'];

    // Call updateUser method to update user data
    $success = $userHandler->updateUser($username, $email, $image, $firstname, $lastname, $mobile, $country, $bio);

    // Check if user data is updated successfully
    if ($success) {
        echo "<script>alert('User data updated successfully');</script>";
    } else {
        echo "<script>alert('Failed to update user data');</script>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
        Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template
    </title>
    <link href="../output.css" rel="stylesheet">
</head>

<body x-data="{ page: 'formLayout', 'loaded': true, 'darkMode': true, 'stickyMenu': false, 'sidebarToggle': false, 'scrollTop': false }" x-init="
          darkMode = JSON.parse(localStorage.getItem('darkMode'));
          $watch('darkMode', value => localStorage.setItem('darkMode', JSON.stringify(value)))" :class="{'dark text-bodydark bg-boxdark-2': darkMode === true}">
    <!-- ===== Preloader Start ===== -->
    <include src="./partials/preloader.php"></include>
    <!-- ===== Preloader End ===== -->

    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
        <!-- ===== Sidebar Start ===== -->

        <!-- ===== Sidebar End ===== -->

        <!-- ===== Content Area Start ===== -->
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <!-- ===== Header Start ===== -->

            <!-- ===== Header End ===== -->

            <!-- ===== Main Content Start ===== -->
            <main>
                <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">


                    <!-- Breadcrumb Start -->

                    <!-- Breadcrumb End -->

                    <!-- ====== Form Layout Section Start -->

                    <!-- Contact Form -->
                    <div class="max-w-2xl w-full mx-auto rounded-3xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
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
                                        <input type="text" name="firstname" required placeholder="Enter your first name" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                    </div>

                                    <div class="w-full xl:w-1/2">
                                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Last name <span class="text-meta-1">*</span>
                                        </label>
                                        <input type="text" name="lastname" required placeholder="Enter your last name" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                    </div>
                                </div>

                                <div class="mb-4.5">
                                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Email <span class="text-meta-1">*</span>
                                    </label>
                                    <input type="email" name="email" value="<?php echo $userDetails['email']; ?>" required placeholder="Enter your email address" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                </div>

                                <div class="mb-4.5">
                                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Mobile No <span class="text-meta-1">*</span>
                                    </label>
                                    <input type="number" name="mobile" required placeholder="Enter Your Mobile No" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                </div>

                                <div class="mb-4.5">
                                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Country <span class="text-meta-1">*</span>
                                    </label>
                                    <div x-data="{ isOptionSelected: false }" class="relative z-20 bg-transparent dark:bg-form-input">
                                        <select name="country" required class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" :class="isOptionSelected && 'text-black dark:text-white'" @change="isOptionSelected = true">
                                            <option value="" class="text-body">
                                                Select Your Country <span class="text-meta-1">*</span>
                                            </option>
                                            <option value="" class="text-body">India</option>
                                            <option value="" class="text-body">USA</option>
                                            <option value="" class="text-body">UK</option>
                                            <option value="" class="text-body">Canada</option>
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
                                    <textarea name="bio" required rows="6" placeholder="Enter You Bio" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea>
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

</html>