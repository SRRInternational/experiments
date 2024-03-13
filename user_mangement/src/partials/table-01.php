<div class='rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
  <h4 class='mb-6 text-xl font-bold text-black dark:text-white'>
    Users
  </h4>

  <div class='flex flex-col'>

    <?php
    // require_once './src/templates/user_list.mustache';

    $userHandler = new UserCRUD($conn);
    $userDetails = $userHandler->getUserFromSession();
    $mustache = new Mustache_Engine;

    if ($userDetails['isAdmin'] == 1) {
      $currentUsername = $_SESSION['username'];

      // Modify the SQL query to exclude the current user's username
      $sql = "SELECT username, email, mobile, CreatedAt, image FROM user WHERE username !=  '$currentUsername'";

      $result = mysqli_query($conn, $sql);

      if (!$result) {
        // If there's an error in the query, display the error message
        echo 'Error: ' . mysqli_error($conn);
      } else {
        // Check if there are any rows returned
        if (mysqli_num_rows($result) > 0) {
          // Start HTML output
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

          // Loop through each row of the result set
          while ($row = mysqli_fetch_assoc($result)) {

            echo $mustache->render(file_get_contents('./templates/adminuser_list.mustache'), ['users' => $row]);
          }
        } else {
          // If there are no users, display a message
          echo 'No users found.';
        }
      }
    } else {
      $currentUsername = $_SESSION['username'];

      // Modify the SQL query to exclude the current user's username
      $sql = "SELECT username, email, mobile, CreatedAt, image FROM user WHERE username !=  '$currentUsername'";

      $result = mysqli_query($conn, $sql);

      if (!$result) {
        // If there's an error in the query, display the error message
        echo 'Error: ' . mysqli_error($conn);
      } else {
        // Check if there are any rows returned
        if (mysqli_num_rows($result) > 0) {
          // Start HTML output
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

          // Loop through each row of the result set
          while ($row = mysqli_fetch_assoc($result)) {

            echo $mustache->render(file_get_contents('./templates/userlist.mustache'), ['users' => $row]);
          }
        } else {
          // If there are no users, display a message
          echo 'No users found.';
        }
      }
    }



    ?>













  </div>
</div>