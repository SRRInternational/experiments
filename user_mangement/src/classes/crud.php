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
    public function updateUser($username, $dob, $age, $profession, $email, $imagePath, $bnr_image, $firstname, $lastname, $mobile, $country, $bio)
    {
        // Prepare the SQL statement
        $query = "UPDATE user SET dob = ?, age = ?, profession = ?, email = ?, image = ?, bnr_image = ?, firstname = ?, lastname = ?, mobile = ?, country = ?, bio = ? WHERE username = ?";

        // Prepare and execute the statement
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssssssssssss", $email, $dob, $age, $profession, $imagePath, $bnr_image, $firstname, $lastname, $mobile, $country, $bio, $username);
        if ($stmt->execute()) {
            return true; // User updated successfully
        } else {
            return false; // Error occurred during user update
        }
    }



    public function uploadImage($image)
    {
        $targetDir = "./uploads/";


        $target_file = $targetDir . basename($image["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Check if image file is a actual image or fake image
        $check = getimagesize($image["tmp_name"]);
        if ($check === false) {
            return ['success' => false, 'message' => "File is not an image."];
        }

        // Check file size
        if ($image["size"] > 5000000) {
            return ['success' => false, 'message' => "Sorry, your file is too large."];
        }

        // Allow certain file formats
        $allowed_formats = ["jpg", "jpeg", "png", "gif"];
        if (!in_array($imageFileType, $allowed_formats)) {
            return ['success' => false, 'message' => "Sorry, only JPG, JPEG, PNG & GIF files are allowed."];
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            return ['success' => false, 'message' => "Sorry, your file was not uploaded."];
        }

        // Upload the file
        if (move_uploaded_file($image["tmp_name"], $target_file)) {
            return ['success' => true, 'file_path' => $target_file];
        } else {
            return ['success' => false, 'message' => "Sorry, there was an error uploading your file."];
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
