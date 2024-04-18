<?php
// Database connection parameters
$host = 'localhost'; // Change to your database host
$username = 'root'; // Change to your database username
$password = ''; // Change to your database password
$database = 'bus_routes_db'; // Change to your database name

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input from the form (assuming you have already sanitized the input)
$username = $_POST['username'];
$password = $_POST['password'];


// Hash the password (for security)

$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($hashedPassword);
$stmt->fetch();

if (password_verify($password, $hashedPassword)) {
    // User inserted successfully
    echo json_encode(array("redirect" => true));
} else {
    // Error inserting user
    echo json_encode(array("redirect" => false, "error" => "Invalid username or password"));
}

// Close the database connection
$stmt->close();
$conn->close();
?>
