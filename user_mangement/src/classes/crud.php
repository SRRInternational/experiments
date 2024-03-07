<?php
require_once "./connection.php";

class UserCRUD
{
    private $conn;

    // Constructor to initialize the database connection
    public function __construct()
    {
        $this->conn = $GLOBALS['conn'];
    }

    // Method to get user details by username
    public function getUserByUsername($username)
    {
        // Prepare the SQL statement
        $query = "SELECT * FROM user WHERE username = ?";

        // Prepare and execute the statement
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $username);
        $stmt->execute();

        // Get the result
        $result = $stmt->get_result();

        // Fetch user details as an associative array
        $userDetails = $result->fetch_assoc();

        return $userDetails;
    }


    public function getUserFromSession()
    {
        // Start the session


        // Check if the username is set in the session
        if (isset($_SESSION['username'])) {
            // Retrieve the username from the session
            $username = $_SESSION['username'];

            // Prepare a SQL query to select the user based on the username
            $sql = "SELECT * FROM user WHERE username = ?";

            // Prepare the SQL statement
            $stmt = mysqli_prepare($this->conn, $sql);

            // Bind parameters
            mysqli_stmt_bind_param($stmt, "s", $username);

            // Execute the statement
            mysqli_stmt_execute($stmt);

            // Get the result
            $result = mysqli_stmt_get_result($stmt);

            // Check if the user is found
            if ($row = mysqli_fetch_assoc($result)) {
                // Return the user data
                return $row;
            } else {
                // If the user is not found, return null
                return null;
            }
        } else {
            // If the username is not set in the session, return null
            return null;
        }
    }

    // Method to update user data
    public function updateUser($username, $email, $imagePath)
    {
        // Prepare the SQL statement
        $query = "UPDATE user SET email = ?, image = ? WHERE username = ?";

        // Prepare and execute the statement
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sss", $email, $imagePath, $username);
        if ($stmt->execute()) {
            return true; // User updated successfully
        } else {
            return false; // Error occurred during user update
        }
    }

    // Method to delete a user
    public function deleteUser($username)
    {
        // Prepare the SQL statement
        $query = "DELETE FROM user WHERE username = ?";

        // Prepare and execute the statement
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $username);
        if ($stmt->execute()) {
            return true; // User deleted successfully
        } else {
            return false; // Error occurred during user deletion
        }
    }
}
