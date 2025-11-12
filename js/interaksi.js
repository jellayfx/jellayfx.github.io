// File: interaksi.js

document.getElementById('tampilkan-instagram-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    // Dapatkan elemen wadah galeri dan teks tombol
    var galeriWadah = document.getElementById('galeri-instagram-tersembunyi');
    var buttonText = document.getElementById('button-text-toggle');
    
    // Toggle class 'tersembunyi'
    if (galeriWadah.classList.contains('tersembunyi')) {
        // TAMPILKAN
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = 'Sembunyikan Galeri Instagram'; // Mengubah teks
    } else {
        // SEMBUNYIKAN
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = 'Lihat Galeri Instagram'; // Mengubah teks kembali
    }
});
