document.getElementById('tampilkan-instagram-btn').addEventListener('click', function(e) {
    // Mencegah browser mengikuti tautan '#'
    e.preventDefault(); 
    
    // Dapatkan elemen wadah galeri Instagram
    var galeriWadah = document.getElementById('galeri-instagram-tersembunyi');
    
    // Toggle (ganti status) class 'tersembunyi'
    if (galeriWadah.classList.contains('tersembunyi')) {
        // Jika tersembunyi, TAMPILKAN
        galeriWadah.classList.remove('tersembunyi');
        this.textContent = 'Sembunyikan Galeri Instagram';
    } else {
        // Jika terlihat, SEMBUNYIKAN
        galeriWadah.classList.add('tersembunyi');
        this.textContent = 'Lihat Galeri Instagram';
    }
});

document.getElementById('tampilkan-gopay-coffee').addEventListener('click', function(e) {
    // Mencegah browser mengikuti tautan '#'
    e.preventDefault(); 
    
    // Dapatkan elemen wadah galeri Gopay
    var galeriWadah = document.getElementById('view-gopay-coffee-tersembunyi');
    
    // Toggle (ganti status) class 'tersembunyi'
    if (galeriWadah.classList.contains('tersembunyi')) {
        // Jika tersembunyi, TAMPILKAN
        galeriWadah.classList.remove('tersembunyi');
        this.textContent = 'Sembunyikan Qris';
    } else {
        // Jika terlihat, SEMBUNYIKAN
        galeriWadah.classList.add('tersembunyi');
        this.textContent = 'Lihat Qris';
    }
});


// File: interaksi.js

document.getElementById('tampilkan-instagram-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    var galeriWadah = document.getElementById('galeri-instagram-tersembunyi');
    var buttonText = document.getElementById('button-text-toggle'); // Menargetkan span teks tombol
    
    if (galeriWadah.classList.contains('tersembunyi')) {
        // TAMPILKAN
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = 'Sembunyikan Galeri Instagram'; // Mengubah hanya teks
    } else {
        // SEMBUNYIKAN
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = 'Lihat Galeri Instagram'; // Mengubah teks kembali
    }
});
