<?php 
include 'koneksi.php';
include 'header.php';
include 'navbar.php';

// Atur fitur display error untuk mempermudah debugging jika ada kendala
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ================= [ KONFIGURASI PAGINATION ] =================
$jumlahDataPerHalaman = 10; // Ubah angka ini untuk menentukan jumlah produk per halaman

// Cek halaman aktif (jika tidak ada di URL, set default ke halaman 1)
$halamanAktif = (isset($_GET['halaman'])) ? intval($_GET['halaman']) : 1;
if ($halamanAktif < 1) { $halamanAktif = 1; }

// Hitung total seluruh data produk di database
$resultTotal = mysqli_query($conn, "SELECT COUNT(*) AS total FROM products");
$rowTotal = mysqli_fetch_assoc($resultTotal);
$totalData = $rowTotal['total'];

// Hitung total halaman yang dibutuhkan
$totalHalaman = ceil($totalData / $jumlahDataPerHalaman);

// Tentukan dari data ke berapa query akan mulai mengambil (OFFSET)
$awalData = ($jumlahDataPerHalaman * $halamanAktif) - $jumlahDataPerHalaman;
// ==============================================================
?>

<div class="container">
    <div class="card shadow-sm mb-4">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Daftar Data Produk</h5>
            <a href="tambah.php" class="btn btn-light btn-sm fw-bold">Tambah Produk Baru</a>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-striped table-hover align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th width="5%">No</th>
                            <th width="20%">Nama Produk</th>
                            <th width="10%">Harga</th>
                            <th width="35%">Deskripsi</th>
                            <th width="10%">Stok</th>
                            <th width="20%" class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // Query mengambil data produk dengan batasan LIMIT dan OFFSET
                        $query = "SELECT * FROM products ORDER BY id DESC LIMIT $awalData, $jumlahDataPerHalaman";
                        $result = mysqli_query($conn, $query);
                        
                        // Penomoran agar tetap berurutan meskipun berpindah halaman
                        $no = $awalData + 1; 

                        if (mysqli_num_rows($result) > 0) {
                            while ($row = mysqli_fetch_assoc($result)) {
                                ?>
                        <tr>
                            <td><?= $no++; ?></td>
                            <td class="fw-bold"><?= htmlspecialchars($row['nama_products']); ?></td>
                            <td class="fw-fw-semibold"><?= htmlspecialchars($row['harga']); ?></td>
                            <td><?= nl2br(htmlspecialchars($row['deskripsi'])); ?></td>
                            <td>
                                <span class="badge bg-<?= $row['stok'] > 5 ? 'success' : 'danger'; ?>">
                                    <?= $row['stok']; ?>
                                </span>
                            </td>
                            <td class="text-center">
                                <a href="update.php?id=<?= $row['id']; ?>"
                                    class="btn btn-warning btn-sm text-white">Edit</a>
                                <a href="delete.php?id=<?= $row['id']; ?>" class="btn btn-danger btn-sm"
                                    onclick="return confirm('Apakah Anda yakin ingin menghapus produk ini?')">Hapus</a>
                            </td>
                        </tr>
                        <?php
                            }
                        } else {
                            echo "<tr><td colspan='5' class='text-center py-4 text-muted'>Belum ada data produk pada halaman ini.</td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>

            <?php if ($totalHalaman > 1) : ?>
            <nav aria-label="Navigasi Halaman Produk" class="mt-4">
                <ul class="pagination justify-content-center">

                    <?php if ($halamanAktif > 1) : ?>
                    <li class="page-item">
                        <a class="page-link" href="show_products.php?halaman=<?= $halamanAktif - 1; ?>">Previous</a>
                    </li>
                    <?php else : ?>
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <?php endif; ?>

                    <?php for ($i = 1; $i <= $totalHalaman; $i++) : ?>
                    <?php if ($i == $halamanAktif) : ?>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link"><?= $i; ?></span>
                    </li>
                    <?php else : ?>
                    <li class="page-item">
                        <a class="page-link" href="show_products.php?halaman=<?= $i; ?>"><?= $i; ?></a>
                    </li>
                    <?php endif; ?>
                    <?php endfor; ?>

                    <?php if ($halamanAktif < $totalHalaman) : ?>
                    <li class="page-item">
                        <a class="page-link" href="show_products.php?halaman=<?= $halamanAktif + 1; ?>">Next</a>
                    </li>
                    <?php else : ?>
                    <li class="page-item disabled">
                        <span class="page-link">Next</span>
                    </li>
                    <?php endif; ?>

                </ul>
            </nav>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>