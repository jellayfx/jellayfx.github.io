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
