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


    public function getUserFromSession(): ?array
    {
        if (isset($_SESSION['username'])) {
            $username = $_SESSION['username'];
            $sql = "SELECT * FROM user WHERE username = ?";
            $stmt = mysqli_prepare($this->conn, $sql);
            mysqli_stmt_bind_param($stmt, "s", $username);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $row = mysqli_fetch_assoc($result);
            return $row ?: null;
        } else {
            return null;
        }
    }

    // Method to update user data
    public function updateUser($username, $dob, $age, $profession, $email, $imagePath, $firstname, $lastname, $mobile, $country, $bio)
    {
        // Prepare the SQL statement
        $query = "UPDATE user SET dob = ?, age = ?, profession = ?, email = ?, image = ?, firstname = ?, lastname = ?, mobile = ?, country = ?, bio = ? WHERE username = ?";

        // Prepare and execute the statement
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sssssssssss", $email, $dob, $age, $profession, $imagePath, $firstname, $lastname, $mobile, $country, $bio, $username);
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
