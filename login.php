<?php
header('Content-Type: application/json');
include '../db/connection.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = md5($data['password']);

$query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($query);

if ($result->num_rows === 1) {
  echo json_encode(['success' => true, 'token' => 'secure-token']);
} else {
  echo json_encode(['success' => false]);
}
?>
