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


    // Method to update user data
    public function updateUser($username, $email)
    {
        // Prepare the SQL statement
        $query = "UPDATE user SET email = ? WHERE username = ?";

        // Prepare and execute the statement
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ss", $email, $username);
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
