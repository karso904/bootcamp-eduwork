<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Form Produk - Dengan Gambar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-sm border-0">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0 text-sm-center text-md-center">Form Input Produk Baru</h5>
                    </div>
                    <div class="card-body p-4">

                        <form action="proses.php" method="POST" id="formProduk" enctype="multipart/form-data"
                            novalidate>
                            <div class="mb-3">
                                <label for="nama" class="form-label">Nama Produk</label>
                                <input type="text" class="form-control" id="nama" name="nama" required minlength="3">
                                <min-lenght></min-lenght>
                                <div class="invalid-feedback">Nama products wajib diisi dan Minimal 3 Huruf.</div>
                            </div>

                            <div class="mb-3">
                                <label for="kategori" class="form-label">Kategori</label>
                                <select class="form-select" id="kategori" name="kategori" required>
                                    <option value="" selected disabled>-- Pilih Kategori --</option>
                                    <option value="Makanan">Makanan</option>
                                    <option value="Pakaian">Pakaian</option>
                                    <option value="Kosmetik">Kosmetik</option>
                                </select>
                                <div class="invalid-feedback">Silakan pilih kategori.</div>
                            </div>

                            <div class="mb-3">
                                <label for="gambar" class="form-label">Gambar Produk</label>
                                <input type="file" class="form-control" id="gambar" name="gambar" accept="image/*"
                                    required>
                                <div class="form-text">Format: JPG, JPEG, PNG (Maks. 2MB)</div>
                                <div class="invalid-feedback">Silakan unggah gambar products.</div>
                            </div>

                            <div class="mb-3">
                                <label for="harga" class="form-label">Harga (Rp)</label>
                                <input type="number" class="form-control" id="harga" name="harga" required>
                            </div>

                            <div class="mb-3">
                                <label for="deskripsi" class="form-label">Deskripsi</label>
                                <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3"
                                    required></textarea>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Simpan Data & Gambar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <script>
    // Validasi Bootstrap
    (function() {
        'use strict'
        const form = document.getElementById('formProduk');
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })()
    </script>

</body>

</html>