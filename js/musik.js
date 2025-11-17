document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('latarBelakangMusik');
    
    if (audio) {
        console.log('Mencoba memutar audio tanpa interaksi pengguna...');
        
        // **Fungsi .play() yang Mencoba Autoplay Bersuara**
        audio.play()
            .then(() => {
                // Berhasil diputar (Ini hanya terjadi jika browser mengizinkannya)
                console.log('✅ Berhasil: Musik otomatis mulai diputar tanpa senyap.');
            })
            .catch(error => {
                // Gagal diputar (Ini adalah hasil yang paling mungkin terjadi)
                console.error('❌ GAGAL: Browser memblokir pemutaran otomatis bersuara (Autoplay Policy).');
                console.error('Penyebab Gagal:', error.name);
                
                // Biasanya, Anda harus menambahkan instruksi kepada pengguna di sini
                // Contoh: audio.controls = true; atau tampilkan pesan "Klik untuk Putar"
            });
    }
});
