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
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare and execute the SQL query to insert user data
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $hashedPassword);

if ($stmt->execute()) {
    // User inserted successfully
    echo "User registered successfully!";
} else {
    // Error inserting user
    echo "Error registering user: " . $stmt->error;
}

// Close the database connection
$stmt->close();
$conn->close();
?>
