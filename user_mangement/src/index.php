<?php
require_once "./connection.php";
session_start();
if (!isset($_SESSION['username'])) {
  header("Location: login.php");
  exit(); // Add exit here to prevent further execution
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
      <main>

      </main>
      <!-- ===== Main Content End ===== -->
    </div>
    <!-- ===== Content Area End ===== -->
  </div>
  <!-- ===== Page Wrapper End ===== -->

  <?php

  if (isset($_POST['Logout'])) {
    session_destroy();
    // Redirect to the login page
    header("Location: login.php");
    exit; // Add exit here to prevent further execution
  }
  ?>


</body>

</html>