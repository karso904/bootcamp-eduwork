<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('home', function () {
   return "Selamat datang di halaman Home"; 
});

Route::get('cart', function () {
    return "Selamat datang di hal Cart";
});

Route::get('products', function () {
    return "Selamat datang di hal Products";
});