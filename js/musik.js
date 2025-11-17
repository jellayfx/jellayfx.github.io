document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('latarBelakangMusik');
    const tombol = document.getElementById('tombolKontrol');

    if (audio && tombol) {
        
        tombol.addEventListener('click', function() {
            
            // Cek apakah audio sedang dalam keadaan paused (jeda)
            // Properti 'paused' akan bernilai true jika audio belum dimainkan atau sedang dijeda
            if (audio.paused) {
                // Mencoba memutar audio
                audio.play()
                    .then(() => {
                        // Berhasil dimainkan
                        tombol.textContent = '⏸️ Jeda Musik';
                        console.log('Musik mulai diputar.');
                    })
                    .catch(error => {
                        // Gagal (jarang terjadi setelah interaksi pengguna, tapi mungkin karena masalah file)
                        console.error('Gagal memutar audio:', error);
                    });
            } else {
                // Audio sedang dimainkan, jadi jeda
                audio.pause();
                tombol.textContent = '▶️ Lanjutkan Musik';
                console.log('Musik dijeda.');
            }
        });
        
    } else {
        console.error('ERROR: Elemen audio atau tombol kontrol tidak ditemukan.');
    }
});
