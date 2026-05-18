<?php 
include 'koneksi.php';
include 'header.php';
include 'navbar.php';

if (isset($_POST['submit'])) {
    // 1. Ambil data dan bersihkan (Meskipun pakai prepared statement, membersihkan data tetap kebiasaan baik)
    $nama_products = mysqli_real_escape_string($conn, $_POST['nama_products']);
    $harga         = intval($_POST['harga']);
    $deskripsi     = mysqli_real_escape_string($conn, $_POST['deskripsi']);
    $stok          = intval($_POST['stok']);

    // 2. Membuat prepared statement (Menggunakan tanda tanya ? sebagai placeholder)
    $stmt = mysqli_prepare($conn, "INSERT INTO products (nama_products, harga, deskripsi, stok) VALUES (?, ?, ?, ?)");

    if ($stmt) {
        // 3. Mengikat parameter (Tanda '&' DIHAPUS, tipe data diganti jadi 'sisi')
        // s = string (nama_products)
        // i = integer (harga)
        // s = string (deskripsi)
        // i = integer (stok)
        mysqli_stmt_bind_param($stmt, "sisi", $nama_products, $harga, $deskripsi, $stok);

        // 4. Menjalankan prepared statement
        if (mysqli_stmt_execute($stmt)) {
            echo "<script>alert('Data berhasil ditambahkan!'); window.location='show_products.php';</script>";
        } else {
            echo "<div class='alert alert-danger'>Gagal menambahkan data: " . mysqli_stmt_error($stmt) . "</div>";
        }

        // 5. Menutup prepared statement setelah selesai digunakan
        mysqli_stmt_close($stmt);
    } else {
        echo "<div class='alert alert-danger'>Gagal menyiapkan query: " . mysqli_error($conn) . "</div>";
    }
}
?>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow-sm">
                <div class="card-header bg-success text-white">
                    <h5 class="mb-0">Form Tambah Produk</h5>
                </div>
                <div class="card-body">
                    <form action="" method="POST">
                        <div class="mb-3">
                            <label for="nama_products" class="form-label fw-bold">Nama Produk</label>
                            <input type="text" class="form-content form-control" id="nama_products" name="nama_products"
                                required placeholder="Masukkan nama products">
                        </div>
                        <div class="mb-3">
                            <label for="harga" class="form-label fw-bold">Harga</label>
                            <input type="number" class="form-control" id="harga" name="harga" min="0" required
                                placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label for="deskripsi" class="form-label fw-bold">Deskripsi</label>
                            <textarea class="form-control" id="deskripsi" name="deskripsi" rows="4"
                                placeholder="Masukkan deskripsi lengkap products"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="stok" class="form-label fw-bold">Jumlah Stok</label>
                            <input type="number" class="form-control" id="stok" name="stok" min="0" required
                                placeholder="0">
                        </div>
                        <div class="d-flex justify-content-between">
                            <a href="show_products.php" class="btn btn-secondary">Kembali</a>
                            <button type="submit" name="submit" class="btn btn-success">Simpan Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>