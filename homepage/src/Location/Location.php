<?php

// Connect to the database
$servername = "localhost";
$username = "root"; // Default username for PHPMyAdmin in XAMPP
$password = ""; // Default password for PHPMyAdmin in XAMPP
$dbname = "bus_routes_db"; // Change to your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get location from the form submission
$data = json_decode(file_get_contents('php://input'), true);
$location = $data['location'];

// Initialize a list to store the bus routes
$busRoutes = [];

// SQL query to fetch bus routes based on location
$sql = "SELECT route_number FROM bus_routes WHERE stops LIKE '%$location%'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        $busRoutes[] = $row['route_number'];
    }
} else {
    echo "No bus routes found for $location";
}

// Close database connection
$conn->close();

// Return the list of bus routes as JSON
echo json_encode($busRoutes);
?>