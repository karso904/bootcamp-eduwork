<?php 
include 'koneksi.php';
include 'header.php';
include 'navbar.php';

// Mengambil ID products dari URL
if (!isset($_GET['id'])) {
    header("Location: show_products.php");
    exit;
}

$id = intval($_GET['id']);
$query = "SELECT * FROM products WHERE id = $id";
$result = mysqli_query($conn, $query);
$data = mysqli_fetch_assoc($result);

if (!$data) {
    echo "<script>alert('Data tidak ditemukan!'); window.location='show_products.php';</script>";
    exit;
}

// Proses update ketika form dikirim
if (isset($_POST['update'])) {
    $nama_products = mysqli_real_escape_string($conn, $_POST['nama_products']);
    $harga = mysqli_real_escape_string($conn, $_POST['harga']);
    $deskripsi   = mysqli_real_escape_string($conn, $_POST['deskripsi']);
    $stok       = intval($_POST['stok']);

    $query_update = "UPDATE products SET nama_products='$nama_products', harga='$harga', deskripsi='$deskripsi', stok='$stok' WHERE id=$id";
    
    if (mysqli_query($conn, $query_update)) {
        echo "<script>alert('Data berhasil diperbarui!'); window.location='show_products.php';</script>";
    } else {
        echo "<div class='alert alert-danger'>Gagal memperbarui data: " . mysqli_error($conn) . "</div>";
    }
}
?>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow-sm">
                <div class="card-header bg-warning text-white">
                    <h5 class="mb-0 text-dark">Form Edit Produk</h5>
                </div>
                <div class="card-body">
                    <form action="" method="POST">
                        <div class="mb-3">
                            <label for="nama_products" class="form-label fw-bold">Nama Produk</label>
                            <input type="text" class="form-control" id="nama_products" name="nama_products"
                                value="<?= htmlspecialchars($data['nama_products']); ?>" required>
                        </div>
                        <div class="mb-3">
                            <label for="harga" class="form-label fw-bold">Harga</label>
                            <input type="number" class="form-control" id="harga" name="harga" min="0"
                                value="<?= $data['harga']; ?>" required>
                        </div>
                        <div class="mb-3">
                            <label for="deskripsi" class="form-label fw-bold">Deskripsi</label>
                            <textarea class="form-control" id="deskripsi" name="deskripsi" rows="4"
                                required><?= htmlspecialchars($data['deskripsi']); ?></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="stok" class="form-label fw-bold">Jumlah Stok</label>
                            <input type="number" class="form-control" id="stok" name="stok" min="0"
                                value="<?= $data['stok']; ?>" required>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a href="show_products.php" class="btn btn-secondary">Batal</a>
                            <button type="submit" name="update" class="btn btn-warning text-dark fw-bold">Update
                                Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>