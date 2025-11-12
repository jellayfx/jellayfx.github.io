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
        // Jika tersembunyi, TAMPILKAN
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = 'Sembunyikan Galeri Instagram'; // Ubah teks di dalam span
    } else {
        // Jika terlihat, SEMBUNYIKAN
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = 'Lihat Galeri Instagram'; // Ubah teks kembali
    }
});

/* Asumsi semua tombol memiliki max-width ini */
.button {
    max-width: 350px; /* Gunakan lebar maksimum tombol Anda yang sebenarnya */
    /* ... */
}

/* Terapkan lebar yang sama pada wadah galeri dan pastikan rata tengah */
#galeri-instagram-tersembunyi {
    width: 90%; /* Mengikuti lebar layar */
    max-width: 350px; /* Sama dengan max-width tombol agar sejajar */
    margin: 20px auto; /* Penting untuk meratakan ke tengah */
    text-align: center; /* Meratakan konten di dalamnya (catatan embed) */
}

/* Pastikan iframe mengisi seluruh lebar wadahnya */
#galeri-instagram-tersembunyi iframe {
    width: 100%;
    /* Atur height sesuai kebutuhan Anda (misalnya 400px seperti yang sudah ada) */
}
