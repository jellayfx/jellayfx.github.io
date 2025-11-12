document.getElementById('tampilkan-instagram-btn').addEventListener('click', function(e) {
    // Mencegah browser mengikuti tautan '#'
    e.preventDefault(); 
    
    // Mendapatkan elemen wadah galeri dan elemen teks tombol
    var galeriWadah = document.getElementById('galeri-instagram-tersembunyi');
    var buttonText = document.getElementById('button-text-toggle');
    
    // Memeriksa dan mengubah status 'tersembunyi'
    if (galeriWadah.classList.contains('tersembunyi')) {
        // Jika tersembunyi, TAMPILKAN
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = 'Sembunyikan Galeri Instagram'; // Mengubah teks
    } else {
        // Jika terlihat, SEMBUNYIKAN
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = 'Lihat Galeri Instagram'; // Mengubah teks kembali
    }
});
