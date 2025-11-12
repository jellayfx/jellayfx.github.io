document.getElementById('tampilkan-instagram-btn').addEventListener('click', function(e) {
    // 1. Mencegah browser mengikuti tautan '#' secara default
    e.preventDefault(); 
    
    // 2. Mendapatkan elemen wadah galeri dan elemen teks tombol
    var galeriWadah = document.getElementById('galeri-instagram-tersembunyi');
    var buttonText = document.getElementById('button-text-toggle');
    
    // 3. Memeriksa dan mengubah status 'tersembunyi'
    if (galeriWadah.classList.contains('tersembunyi')) {
        // TAMPILKAN: Hapus class 'tersembunyi'
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = 'Sembunyikan Galeri Instagram'; // Ubah teks tombol
    } else {
        // SEMBUNYIKAN: Tambahkan class 'tersembunyi'
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = 'Lihat Galeri Instagram'; // Ubah teks kembali
    }
});
