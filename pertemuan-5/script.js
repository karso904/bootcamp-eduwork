        // --- DATA & RENDER PRODUK ---
        const products = [{
                id: 1,
                name: "Laptop ASUS VivoBook 15",
                price: 7500000,
                category: "Laptop",
                description: "Laptop untuk kebutuhan harian dan tugas sekolah dengan prosesor Intel i3, RAM 8GB, SSD 512GB.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=ASUS+VivoBook"
            },
            {
                id: 2,
                name: "Smartphone Samsung Galaxy A54",
                price: 5999000,
                category: "Smartphone",
                description: "Smartphone menengah dengan layar Super AMOLED 120Hz, kamera utama 50MP OIS, baterai 5000mAh.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Samsung+A54"
            },
            {
                id: 3,
                name: "Mouse Wireless Logitech M170",
                price: 150000,
                category: "Aksesoris",
                description: "Mouse nirkabel yang andal dengan koneksi 2.4GHz, daya tahan baterai hingga 12 bulan.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Mouse+Logitech"
            },
            {
                id: 4,
                name: "Headphone SONY WH-1000XM5",
                price: 4500000,
                category: "Audio",
                description: "Headphone noise-canceling premium dengan kualitas suara Hi-Res, nyaman dipakai berjam-jam.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Sony+Headphone"
            },
            {
                id: 5,
                name: "Laptop Apple MacBook Air M2",
                price: 18500000,
                category: "Laptop",
                description: "Laptop super tipis dan ringan dengan chip M2 yang sangat cepat dan efisien, layar Liquid Retina 13.6 inci.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=MacBook+Air+M2"
            },
            {
                id: 6,
                name: "Kamera Mirrorless Canon EOS M50",
                price: 8500000,
                category: "Kamera",
                description: "Kamera mirrorless yang cocok untuk vlogger pemula, video 4K, Dual Pixel CMOS AF, layar sentuh vari-angle.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Canon+M50"
            },
            {
                id: 7,
                name: "Keyboard Mekanikal Keychron K2",
                price: 1200000,
                category: "Aksesoris",
                description: "Keyboard mekanikal nirkabel layout 75% dengan switch Gateron, kompatibel untuk Mac dan Windows.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Keychron+K2"
            },
            {
                id: 8,
                name: "Smartphone iPhone 14 Pro",
                price: 19999000,
                category: "Smartphone",
                description: "Smartphone flagship Apple dengan Dynamic Island, kamera 48MP, chip A16 Bionic yang powerful.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=iPhone+14+Pro"
            },
            {
                id: 9,
                name: "Speaker Bluetooth JBL Flip 6",
                price: 1800000,
                category: "Audio",
                description: "Speaker portabel tahan air IP67 dengan suara yang kuat dan bass yang dalam.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=JBL+Flip+6"
            },
            {
                id: 10,
                name: "Laptop Lenovo ThinkPad E14",
                price: 11000000,
                category: "Laptop",
                description: "Laptop bisnis andal dan tahan banting dengan prosesor AMD Ryzen 5, keyboard ergonomis, keamanan tingkat bisnis.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=ThinkPad+E14"
            },
            {
                id: 11,
                name: "Earbuds TWS Soundcore Liberty 4",
                price: 1400000,
                category: "Audio",
                description: "Earbuds TWS dengan active noise cancelling, suara detail beresolusi tinggi, dan fitur pemantau detak jantung.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Soundcore+Liberty"
            },
            {
                id: 12,
                name: "Webcam Logitech C920 Pro",
                price: 950000,
                category: "Aksesoris",
                description: "Webcam Full HD 1080p yang populer untuk panggilan video jernih dan streaming profesional.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Webcam+C920"
            },
            {
                id: 13,
                name: "Smartphone Xiaomi Redmi Note 12",
                price: 2500000,
                category: "Smartphone",
                description: "Smartphone budget terbaik dengan layar AMOLED 120Hz, Snapdragon 685, fast charging 33W.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Redmi+Note+12"
            },
            {
                id: 14,
                name: "Kamera Aksi GoPro Hero 11",
                price: 6500000,
                category: "Kamera",
                description: "Kamera aksi terkemuka untuk merekam petualangan ekstrem, stabilisasi HyperSmooth 5.0, video 5.3K.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=GoPro+Hero+11"
            },
            {
                id: 15,
                name: "Laptop Acer Predator Helios 300",
                price: 22000000,
                category: "Laptop",
                description: "Laptop gaming gahar dengan prosesor Intel i7 gen terbaru, kartu grafis RTX 3060, layar refresh rate tinggi.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Acer+Predator"
            },
            {
                id: 16,
                name: "Microphone USB RODE NT-USB Mini",
                price: 1650000,
                category: "Audio",
                description: "Mikrofon USB ringkas berkualitas studio, ideal untuk podcaster, streamer, dan gamer.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Rode+NT-USB"
            },
            {
                id: 17,
                name: "Powerbank Anker PowerCore 10000mAh",
                price: 350000,
                category: "Aksesoris",
                description: "Powerbank ringkas, ringan, namun berkapasitas besar, aman dengan teknologi MultiProtect.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Anker+Powerbank"
            },
            {
                id: 18,
                name: "Smartphone Google Pixel 7a",
                price: 8000000,
                category: "Smartphone",
                description: "Smartphone menengah dengan kamera terbaik di kelasnya yang didukung komputasi AI dari Google.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Pixel+7a"
            },
            {
                id: 19,
                name: "Laptop HP Pavilion x360",
                price: 10500000,
                category: "Laptop",
                description: "Laptop konvertibel 2-in-1 dengan layar sentuh yang bisa diputar 360 derajat, cocok untuk productstivitas dan hiburan.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=HP+Pavilion"
            },
            {
                id: 20,
                name: "Kamera Sony Alpha A7 III",
                price: 25000000,
                category: "Kamera",
                description: "Kamera mirrorless full-frame legendaris, autofokus cepat, performa luar biasa dalam kondisi kurang cahaya.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Sony+A7+III"
            },
            {
                id: 21,
                name: "Headset Gaming SteelSeries Arctis 7+",
                price: 2800000,
                category: "Audio",
                description: "Headset gaming nirkabel nyaman dengan audio surround 7.1, mikrofon ClearCast berstandar Discord.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=SteelSeries+Arctis"
            },
            {
                id: 22,
                name: "Mousepad Gaming Corsair MM300",
                price: 250000,
                category: "Aksesoris",
                description: "Mousepad kain anti-sobek tahan lama, permukaan mulus untuk pergerakan mouse yang presisi.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Corsair+Mousepad"
            },
            {
                id: 23,
                name: "Smartphone POCO X5 Pro 5G",
                price: 3800000,
                category: "Smartphone",
                description: "Smartphone kencang untuk gaming budget dengan prosesor Snapdragon 778G, layar AMOLED 120Hz.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=POCO+X5+Pro"
            },
            {
                id: 24,
                name: "Laptop MSI Modern 14",
                price: 8200000,
                category: "Laptop",
                description: "Laptop tipis dan ringan berdesain elegan, performa mumpuni untuk pekerjaan kantoran dan mahasiswa.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=MSI+Modern+14"
            },
            {
                id: 25,
                name: "Lensa Kamera Canon EF 50mm f/1.8 STM",
                price: 1800000,
                category: "Kamera",
                description: "Lensa fix populer dan terjangkau, menghasilkan efek bokeh menawan untuk foto potret.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Lensa+Canon+50mm"
            },
            {
                id: 26,
                name: "Stand Laptop Aluminium UGREEN",
                price: 280000,
                category: "Aksesoris",
                description: "Stand laptop portabel berbahan aluminium kokoh, membantu menjaga postur tubuh dan sirkulasi udara laptop.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Ugreen+Stand"
            },
            {
                id: 27,
                name: "Smartphone ASUS ROG Phone 7",
                price: 14500000,
                category: "Smartphone",
                description: "Smartphone gaming ultimati dengan pendingin tingkat lanjut, tombol pemicu ultrasonik, performa tak tertandingi.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=ROG+Phone+7"
            },
            {
                id: 28,
                name: "Speaker Komputer Edifier R1280T",
                price: 1300000,
                category: "Audio",
                description: "Speaker rak buku klasik yang menyajikan suara seimbang dan jernih untuk setup komputer atau ruangan kecil.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Edifier+Speaker"
            },
            {
                id: 29,
                name: "Laptop Dell XPS 13",
                price: 28000000,
                category: "Laptop",
                description: "Ultrabook premium dengan desain nyaris tanpa bingkai (InfinityEdge), layar memukau, material kokoh.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=Dell+XPS+13"
            },
            {
                id: 30,
                name: "Flashdisk SanDisk Ultra Dual Drive 64GB",
                price: 120000,
                category: "Aksesoris",
                description: "Flashdisk praktis dengan konektor USB Type-C dan Type-A untuk transfer file antar perangkat dengan mudah.",
                image: "https://placehold.co/400x300/e0e0e0/000000?text=SanDisk+Flashdisk"
            }
        ];

        function formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(number);
        }

        function renderProducts(productArray) {
            const container = document.getElementById('productContainer');
            const message = document.getElementById('noProductsMessage');
            const countDisplay = document.getElementById('productCount');

            container.innerHTML = '';
            countDisplay.innerText = `Menampilkan ${productArray.length} products`;

            if (productArray.length === 0) {
                message.classList.remove('d-none');
            } else {
                message.classList.add('d-none');

                productArray.forEach(product => {
                    let badgeClass = 'bg-secondary';
                    switch (product.category) {
                        case 'Laptop':
                            badgeClass = 'bg-primary';
                            break;
                        case 'Smartphone':
                            badgeClass = 'bg-success';
                            break;
                        case 'Aksesoris':
                            badgeClass = 'bg-info text-dark';
                            break;
                        case 'Audio':
                            badgeClass = 'bg-warning text-dark';
                            break;
                        case 'Kamera':
                            badgeClass = 'bg-danger';
                            break;
                    }

                    const productCard = `
                        <div class="col">
                            <div class="card product-card h-100 border-0 shadow-sm">
                                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                                <div class="card-body d-flex flex-column">
                                    <span class="badge ${badgeClass} category-badge align-self-start">${product.category}</span>
                                    <h5 class="card-title text-truncate fw-bold" title="${product.name}">${product.name}</h5>
                                    <p class="card-text product-description">${product.description}</p>
                                    <div class="mt-auto pt-3 border-top">
                                        <p class="price mb-0">${formatRupiah(product.price)}</p>
                                        <button class="btn btn-outline-primary btn-sm w-100 mt-3 fw-bold" onclick="showProductDetail(${product.id})">Lihat Detail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    container.innerHTML += productCard;
                });
            }
        }

        function applyFilters() {
            const searchKeyword = document.getElementById('searchInput').value.toLowerCase();
            const categorySelect = document.getElementById('categoryFilter').value;
            const minPriceInput = document.getElementById('minPrice').value;
            const maxPriceInput = document.getElementById('maxPrice').value;

            const minPrice = minPriceInput ? parseInt(minPriceInput) : 0;
            const maxPrice = maxPriceInput ? parseInt(maxPriceInput) : Infinity;

            const filteredProducts = products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchKeyword);
                const matchesCategory = categorySelect === 'semua' || product.category === categorySelect;
                const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
                return matchesSearch && matchesCategory && matchesPrice;
            });

            renderProducts(filteredProducts);
        }

        function resetFilters() {
            document.getElementById('searchInput').value = '';
            document.getElementById('categoryFilter').value = 'semua';
            document.getElementById('minPrice').value = '';
            document.getElementById('maxPrice').value = '';
            renderProducts(products);
        }

        document.getElementById('searchInput').addEventListener('keyup', applyFilters);

        function showProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                document.getElementById('modalImage').src = product.image;
                document.getElementById('modalImage').alt = product.name;
                document.getElementById('modalCategory').innerText = product.category;
                document.getElementById('modalName').innerText = product.name;
                document.getElementById('modalPrice').innerText = formatRupiah(product.price);
                document.getElementById('modalDesc').innerText = product.description;

                let badgeClass = 'bg-secondary';
                switch (product.category) {
                    case 'Laptop':
                        badgeClass = 'bg-primary';
                        break;
                    case 'Smartphone':
                        badgeClass = 'bg-success';
                        break;
                    case 'Aksesoris':
                        badgeClass = 'bg-info text-dark';
                        break;
                    case 'Audio':
                        badgeClass = 'bg-warning text-dark';
                        break;
                    case 'Kamera':
                        badgeClass = 'bg-danger';
                        break;
                }
                document.getElementById('modalCategory').className = `badge ${badgeClass} mb-2 fs-6 px-3 py-2`;

                const detailModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
                detailModal.show();
            }
        }

        window.onload = function () {
            renderProducts(products);
        };

        // --- FITUR LOG IN ---

        // Toggle Show/Hide Password Login
        document.getElementById('toggleLoginPassword').addEventListener('click', function () {
            const input = document.getElementById('loginPassword');
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('bi-eye');
            this.classList.toggle('bi-eye-slash');
            this.classList.toggle('text-muted');
            this.classList.toggle('text-primary');
        });

        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameInput = document.getElementById('loginUsername');
            const passwordInput = document.getElementById('loginPassword');
            const errorUsername = document.getElementById('errorUsername');
            const errorPassword = document.getElementById('errorPassword');

            // Reset Error
            usernameInput.classList.remove('input-error');
            passwordInput.classList.remove('input-error');
            errorUsername.style.display = 'none';
            errorPassword.style.display = 'none';

            let isValid = true;

            if (usernameInput.value.trim() === '') {
                usernameInput.classList.add('input-error');
                errorUsername.style.display = 'block';
                isValid = false;
            }

            if (passwordInput.value.trim() === '') {
                passwordInput.classList.add('input-error');
                errorPassword.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                const loginModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('loginModal'));
                loginModal.hide();
                showNotification(`Berhasil login sebagai <b>${usernameInput.value}</b>`, 'success');
                usernameInput.value = '';
                passwordInput.value = '';
            }
        });

        // --- FITUR DAFTAR (REGISTER) ---

        // Toggle Show/Hide Password & Confirm Password
        const togglePasswordInputs = [{
                icon: 'toggleRegPassword',
                input: 'regPassword'
            },
            {
                icon: 'toggleRegConfirmPassword',
                input: 'regConfirmPassword'
            }
        ];

        togglePasswordInputs.forEach(item => {
            document.getElementById(item.icon).addEventListener('click', function () {
                const input = document.getElementById(item.input);
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                this.classList.toggle('bi-eye');
                this.classList.toggle('bi-eye-slash');
                this.classList.toggle('text-muted');
                this.classList.toggle('text-primary');
            });
        });

        document.getElementById('registerForm').addEventListener('submit', function (event) {
            event.preventDefault();

            // Ambil Elemen
            const name = document.getElementById('regName');
            const username = document.getElementById('regUsername');
            const password = document.getElementById('regPassword');
            const confirm = document.getElementById('regConfirmPassword');

            const errorName = document.getElementById('errorRegName');
            const errorUsername = document.getElementById('errorRegUsername');
            const errorPassword = document.getElementById('errorRegPassword');
            const errorConfirm = document.getElementById('errorRegConfirmPassword');

            // Reset Error Styles
            [name, username, password, confirm].forEach(el => el.classList.remove('input-error'));
            [errorName, errorUsername, errorPassword, errorConfirm].forEach(el => el.style.display = 'none');

            let isValid = true;

            // Validasi Kosong
            if (name.value.trim() === '') {
                name.classList.add('input-error');
                errorName.style.display = 'block';
                isValid = false;
            }
            if (username.value.trim() === '') {
                username.classList.add('input-error');
                errorUsername.style.display = 'block';
                isValid = false;
            }
            if (password.value.trim() === '') {
                password.classList.add('input-error');
                errorPassword.style.display = 'block';
                isValid = false;
            }

            // Validasi Konfirmasi Password
            if (confirm.value.trim() === '') {
                confirm.classList.add('input-error');
                errorConfirm.innerHTML = '<i class="bi bi-exclamation-circle me-1"></i>Konfirmasi password harus diisi';
                errorConfirm.style.display = 'block';
                isValid = false;
            } else if (password.value !== confirm.value) {
                confirm.classList.add('input-error');
                errorConfirm.innerHTML = '<i class="bi bi-exclamation-circle me-1"></i>Password tidak cocok';
                errorConfirm.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                const regModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('registerModal'));
                regModal.hide();
                showNotification(`Pendaftaran berhasil! Selamat datang, <b>${name.value}</b>. Silakan login.`, 'primary');

                // Kosongkan form
                name.value = '';
                username.value = '';
                password.value = '';
                confirm.value = '';
            }
        });

        // Fungsi Global untuk menampilkan Notifikasi (Alert Bootstrap)
        function showNotification(message, type) {
            const container = document.querySelector('.container.mb-5');
            const alertHtml = `
                <div class="alert alert-${type} alert-dismissible fade show mt-3 shadow-sm border-0" role="alert">
                    ${type === 'success' ? '<i class="bi bi-check-circle-fill me-2 fs-5"></i>' : '<i class="bi bi-info-circle-fill me-2 fs-5"></i>'}
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            // Masukkan alert ke atas kontainer utama
            container.insertAdjacentHTML('afterbegin', alertHtml);

            // Hapus otomatis setelah 5 detik
            setTimeout(() => {
                const alertEl = container.querySelector('.alert');
                if (alertEl) {
                    const bsAlert = new bootstrap.Alert(alertEl);
                    bsAlert.close();
                }
            }, 5000);
        }