                        <?php
                    $pesan = "";
                    $tipe_alert = "";

                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $nama = $_POST['nama'];
                        $harga = $_POST['harga'];
                        $kategori = $_POST['kategori'];
                        $deskripsi = $_POST['deskripsi'];
                        
                        // Memproses File Gambar
                        $nama_gambar = $_FILES['gambar']['name'];
                        $ukuran_gambar = $_FILES['gambar']['size'];
                        $error_gambar = $_FILES['gambar']['error'];

                        // Validasi Dasar: Memastikan semua kolom diisi
                        if (empty(trim($nama)) || empty(trim($harga)) || empty($kategori) || empty($nama_gambar)) {
                            $pesan = "Gagal: Semua kolom dan gambar wajib diisi!";
                            $tipe_alert = "danger";
                        } else {
                            // Validasi tambahan untuk file (contoh: hanya gambar)
                            $ekstensi_valid = ['jpg', 'jpeg', 'png'];
                            $ekstensi_file = strtolower(pathinfo($nama_gambar, PATHINFO_EXTENSION));

                            if (!in_array($ekstensi_file, $ekstensi_valid)) {
                                $pesan = "Gagal: File harus berupa gambar (JPG, JPEG, atau PNG).";
                                $tipe_alert = "warning";
                            } elseif ($ukuran_gambar > 2000000) { // Limit 2MB
                                $pesan = "Gagal: Ukuran gambar terlalu besar (Maksimal 2MB).";
                                $tipe_alert = "warning";
                            } else {
                                // Simulasi Berhasil
                                $harga_format = "Rp " . number_format($harga, 0, ',', '.');
                                $pesan = "Sukses: Produk <strong>" . htmlspecialchars($nama) . "</strong> (" . $kategori . ") berhasil diproses bersama gambar <em>" . $nama_gambar . "</em>.";
                                $tipe_alert = "success";
                            }
                        }

                        if ($pesan != "") {
                            echo "
                            <div class='alert alert-{$tipe_alert} alert-dismissible fade show' role='alert'>
                                {$pesan}
                                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                            </div>
                            ";
                        }
                    }
                    ?>