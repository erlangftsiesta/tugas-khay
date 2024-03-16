//Definisikan library dan modul yang akan dipakai
const express = require('express');
const mysql = require('mysql')
const path = require('path')
const app = express();
const PORT = 5000;

// Koneksi ke MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Ganti dengan username MySQL Anda
    password: '', // Ganti dengan password MySQL Anda
    database: 'crud_kel1' // Ganti dengan nama database yang ingin Anda hubungkan
});

// Membuka koneksi ke database MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error koneksi ke database MySQL: ' + err.stack);
        return;
    }
    console.log('Connected');
});

//definisikan lokasi folder agar dibaca express
app.use(express.static(path.join(__dirname, 'public')));

//sesuaikan lokasi folder render agar dibaca express
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views/admin'),
]);

// Mengatur EJS sebagai view engine
app.set('view engine', 'ejs');

//Mendeklarasikan route homepage dan merender konten
app.get('/', (req, res)=>{
    res.render('index')
});

//Mendeklarasikan route homepage admin dan merender konten
app.get('/admin', (req, res)=>{
    res.render('admin/index')
});

app.listen(PORT, ()=> {
    console.log("Server berhasil dijalankan");
    console.log("Ketik localhost:5000 untuk mengakses web")
});