<?php
$host = "localhost";
$username = "root";
$password = "root";
$database = "bootcamp8";

$conn = mysqli_connect($host, $username, $password, $database);
if(!$conn) {
    die("Koneksi Gagal". "Error" .mysqli_connect_error());
}
// mysqli_close($conn);
?>