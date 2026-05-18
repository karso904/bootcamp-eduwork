<?php
include 'koneksi.php';

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    
    $query = "DELETE FROM products WHERE id = $id";
    
    if (mysqli_query($conn, $query)) {
        echo "<script>alert('Data berhasil dihapus!'); window.location='show_products.php';</script>";
    } else {
        echo "<script>alert('Gagal menghapus data!'); window.location='show_products.php';</script>";
    }
} else {
    header("Location: show_products.php");
}
?>