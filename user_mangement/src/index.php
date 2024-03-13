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

$userCRUD = new UserCRUD($conn);
if (isset($_POST['delete'])) {
  $username = $_POST['delete_username'];
  if ($userCRUD->deleteUser($username)) {
    // User deleted successfully
    header("Location: index.php");
    exit; // Add exit here to prevent further execution
  } else {
    // Error occurred during user deletion
    echo "Error occurred during user deletion";
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
    eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template
  </title>


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

        <?php
        if (isset($_POST['search_username'])) {
          $mustache = new Mustache_Engine;
          $searchUsername = $_POST['search_username'];
          $sql = "SELECT username, email, mobile, CreatedAt, image FROM user WHERE username LIKE '%$searchUsername%'";
          $result = mysqli_query($conn, $sql);

          if ($result && mysqli_num_rows($result) > 0) {
            // Render user list based on search result
            echo '<div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div class="p-2.5 xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Source</h5>
            </div>
            <div class="p-2.5 text-center xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Name</h5>
            </div>
            <div class="p-2.5 text-center xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Email</h5>
            </div>
            <div class="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Mobile no</h5>
            </div>
            <div class="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Actions</h5>
            </div>
          </div>';
            $userDetails = $userHandler->getUserFromSession();
            if ($userDetails['isAdmin'] == 1) {
              while ($row = mysqli_fetch_assoc($result)) {
                // Render user information
                echo $mustache->render(file_get_contents('./templates/adminuser_list.mustache'), ['users' => $row]);
              }
            } else {
              while ($row = mysqli_fetch_assoc($result)) {
                // Render user information
                echo $mustache->render(file_get_contents('./templates/userlist.mustache'), ['users' => $row]);
              }
            }
          } else {
            echo 'No users found.';
          }
        } else {
          include './partials/table-01.php';
        }
        ?>

      </main>
      <!-- ===== Main Content End ===== -->
    </div>
    <!-- ===== Content Area End ===== -->
  </div>
  <!-- ===== Page Wrapper End ===== -->




</body>

</html>