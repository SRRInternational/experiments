<?php
require_once "connection.php";
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit; // Add exit here to prevent further execution
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>

    <!-- Include Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-slate-200">
    <div class="flex  justify-between p-4 items-center bg-blue-300">
        <h1 class="font-bold text-3xl">Welcome to Admin Panel - <?php echo $_SESSION['username'] ?></h1>
        <form method="POST">
            <button name="Logout" class="bg-blue-400 p-2 rounded-md text-white font-bold">Logout</button>
        </form>
    </div>

    <?php
    $sql = "SELECT username FROM user";
    $result = mysqli_query($conn, $sql);

    if (!$result) {
        // If there's an error in the query, display the error message
        echo "Error: " . mysqli_error($conn);
    } else {
        // Check if there are any rows returned
        if (mysqli_num_rows($result) > 0) {
            // Start HTML output
            echo "<div class='container mx-auto p-8'>
                            <h1 class='text-2xl font-bold mb-4'>User List</h1>
                            <table class='min-w-full divide-y divide-gray-200'>
                                <thead class='bg-gray-50'>
                                    <tr>
                                        <th scope='col' class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                            Username
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class='bg-white divide-y divide-gray-200'>";

            // Loop through each row of the result set
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>
                        <td class='px-6 py-4 whitespace-nowrap'>
                            <div class='text-sm text-gray-900'>" . $row["username"] . "</div>
                        </td>
                    </tr>";
            }

            // Close the HTML table and body tags
            echo "</tbody>
                </table>
            </div>";
        } else {
            // If there are no users, display a message
            echo "No users found.";
        }
    }

    // Close the database connection
    mysqli_close($conn);
    ?>

    <?php
    // Handle logout request
    if (isset($_POST['Logout'])) {
        session_destroy();
        // Redirect to the login page
        header("Location: index.php");
        exit; // Add exit here to prevent further execution
    }
    ?>

</body>

</html>