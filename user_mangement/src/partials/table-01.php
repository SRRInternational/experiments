<div class='rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
  <h4 class='mb-6 text-xl font-bold text-black dark:text-white'>
    Users
  </h4>

  <div class='flex flex-col'>

    <?php
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
          echo '<div class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
      <div class="flex items-center gap-3 p-2.5  xl:p-5">
      <div class="h-11 w-11" style="border-radius: 90px;">
      <img class="object-cover h-full w-full rounded-full" src="' . $row["image"] . '" alt="Brand" />
    </div>
        <p class="hidden font-medium text-black dark:text-white sm:block">
        <a href="user.php?username=' . $row['username'] . '" class="text-sky-600 hover:underline">' . $row['username'] . '</a>
        </p>
      </div>

      <div class="flex items-center justify-center p-2.5 xl:p-5">
        <p class="font-medium text-black dark:text-white">' . $row['username'] . '</p>
      </div>

      <div class="flex items-center justify-center p-2.5 xl:p-5">
        <p class="font-medium text-meta-3">' . $row['email'] . '</p>
      </div>

      <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p class="font-medium text-black dark:text-white">' . $row['mobile'] . '</p>
      </div>

      <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-2">
      <a href="#" class="inline-flex items-center justify-center rounded-md bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4">
      View
    </a>
    <a href="#" class="inline-flex items-center justify-center rounded-md bg-meta-3 px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4">
    Edit
  </a>
      </div>
    </div>';
        }
      } else {
        // If there are no users, display a message
        echo 'No users found.';
      }
    }
    ?>













  </div>
</div>