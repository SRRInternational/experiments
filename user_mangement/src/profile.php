<?php
require_once "./connection.php";
require_once "./classes/crud.php";
require_once "../vendor/autoload.php";
session_start();
if (!isset($_SESSION['username'])) {
  header("Location: login.php");
  exit(); // Add exit here to prevent further execution
}

if (isset($_POST['Logout'])) {
  session_destroy();
  // Redirect to the login page
  header("Location: login.php");
  exit; // Add exit here to prevent further execution
}

$userHandler = new UserCRUD($conn);
$userDetails = $userHandler->getUserFromSession();
$mustache = new Mustache_Engine;



?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profile | TailAdmin - Tailwind CSS Admin Dashboard Template</title>
  <link href="../output.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.10.3/cdn.js" integrity="sha512-KnYVZoWDMDmJwjmoUEcEd//9bap1dhg0ltiMWtdoKwvVdmEFZGoKsFhYBzuwP2v2iHGnstBor8tjPcFQNgI5cA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body x-data="{ page: 'profile', 'loaded': true, 'darkMode': true, 'stickyMenu': false, 'sidebarToggle': false, 'scrollTop': false }" x-init="
          darkMode = JSON.parse(localStorage.getItem('darkMode'));
          $watch('darkMode', value => localStorage.setItem('darkMode', JSON.stringify(value)))" :class="{'dark text-bodydark bg-boxdark-2': darkMode === true}">
  <!-- ===== Preloader Start ===== -->
  <!-- <include src="./partials/preloader.php"></include> -->
  <?php include './partials/preloader.php'; ?>
  <!-- ===== Preloader End ===== -->

  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <!-- <include src="./partials/sidebar.php"></include> -->
    <?php include './partials/sidebar.php'; ?>
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <!-- ===== Header Start ===== -->
      <!-- <include src="./partials/header.php" /> -->
      <?php include './partials/header.php'; ?>
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div class="mx-auto max-w-242.5">
            <!-- Breadcrumb Start -->
            <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 class="text-title-md2 font-bold text-black dark:text-white">
                Profile
              </h2>

              <nav>
                <ol class="flex items-center gap-2">
                  <li>
                    <a class="font-medium" href="index.php">Dashboard /</a>
                  </li>
                  <li class="text-primary">Profile</li>
                </ol>
              </nav>
            </div>
            <!-- Breadcrumb End -->

            <!-- ====== Profile Section Start -->
            <div class="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="relative z-20 h-35 md:h-65">
                <img src=<?php echo $userDetails['bnr_image'] ? $userDetails['bnr_image'] : './images/cover/cover-01.png' ?> alt="profile cover" class="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center" />
                <div class="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
                  <label for="cover" class="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4">
                    <input type="file" name="cover" id="cover" class="sr-only" />
                    <span>
                      <svg class="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z" fill="white" />
                      </svg>
                    </span>
                    <span>Edit</span>
                  </label>
                </div>
              </div>
              <?php
              $data = [
                'image' => $userDetails['image'],
                'bnr_image' => $userDetails['bnr_image'],
                'firstname' => $userDetails['firstname'],
                'lastname' => $userDetails['lastname'],
                'dob' => $userDetails['dob'],
                'age' => $userDetails['age'],
                'profession' => $userDetails['profession'],
                'email' => $userDetails['email'],
                'mobile' => $userDetails['mobile'],
                'country' => $userDetails['country'],
                'bio' => $userDetails['bio']
              ];
              echo $mustache->render(file_get_contents('./templates/profile.mustache'), $data);
              ?>
            </div>
            <!-- ====== Profile Section End -->
          </div>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
    <!-- ===== Content Area End ===== -->
  </div>
  <!-- ===== Page Wrapper End ===== -->
</body>

</html>