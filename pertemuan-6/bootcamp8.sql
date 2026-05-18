-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 11 Bulan Mei 2026 pada 16.16
-- Versi server: 5.7.24
-- Versi PHP: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bootcamp8`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nama_products` varchar(100) NOT NULL,
  `harga` float NOT NULL,
  `deskripsi` text,
  `stok` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `nama_products`, `harga`, `deskripsi`, `stok`) VALUES
(1, 'Kemeja Hitam', 300000, 'Kualitas Premium bahan Adem', 200),
(2, 'Celana Cardinal', 400000, 'Kualitas Premium Enak dipakai', 25),
(3, 'Gamis Couple', 350000, 'Bahan Adem Murah Meriah', 20),
(4, 'Kopiah', 30000, 'Bahan Premium Kualitas Sultan', 30),
(5, 'Kaos Polos', 50000, 'Kaos Polos Desain Sederhana', 20),
(6, 'Celana Jeans', 250000, 'Cocok Untuk sehari-hari', 30),
(7, 'Baju Wanita', 180000, 'Bahan Adem desain modern', 50),
(8, 'Sepatu Sneakers', 3000000, 'Desain menarik kualitas Dunia', 60),
(9, 'Kaos Kaki Sultan', 30000, 'Kaki aman rasa adem', 30),
(10, 'Blazer Pria', 300000, 'Kualitas Premium Bahan Adem', 40);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Karso', 'karso123@gmail.com', 'Ka12345@'),
(8, 'Eka', 'eka@gmail.com', 'Ek12345@'),
(9, 'Jalu', 'jalu@gmail.com', 'Jl12345@'),
(10, 'Gemoy', 'gemoy@gmail.com', 'Ge12345@'),
(11, 'Cucu', 'cucu@gmail.com', 'Cu12345@'),
(12, 'Nono', 'nono@gmail.com', 'No12345@');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_users` (`user_id`),
  ADD KEY `fk_orders_products` (`product_id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Karso', 'karso123@gmail.com', 'Ka12345@'),
(8, 'Eka', 'eka@gmail.com', 'Ek12345@'),
(9, 'Jalu', 'jalu@gmail.com', 'Jl12345@'),
(10, 'Gemoy', 'gemoy@gmail.com', 'Ge12345@'),
(11, 'Cucu', 'cucu@gmail.com', 'Cu12345@'),
(12, 'Nono', 'nono@gmail.com', 'No12345@');

INSERT INTO `products` (`id`, `nama_products`, `harga`, `deskripsi`, `stok`) VALUES
(1, 'Kemeja Hitam', 300000, 'Kualitas Premium bahan Adem', 200),
(2, 'Celana Cardinal', 400000, 'Kualitas Premium Enak dipakai', 25),
(3, 'Gamis Couple', 350000, 'Bahan Adem Murah Meriah', 20),
(4, 'Kopiah', 30000, 'Bahan Premium Kualitas Sultan', 30),
(5, 'Kaos Polos', 50000, 'Kaos Polos Desain Sederhana', 20),
(6, 'Celana Jeans', 250000, 'Cocok Untuk sehari-hari', 30),
(7, 'Baju Wanita', 180000, 'Bahan Adem desain modern', 50),
(8, 'Sepatu Sneakers', 3000000, 'Desain menarik kualitas Dunia', 60),
(9, 'Kaos Kaki Sultan', 30000, 'Kaki aman rasa adem', 30),
(10, 'Blazer Pria', 300000, 'Kualitas Premium Bahan Adem', 40);

SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM orders;

UPDATE products SET nama_products = 'Kemeja Wanita' WHERE id ='2';
DELETE FROM orders WHERE id ='2'
