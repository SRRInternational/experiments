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
