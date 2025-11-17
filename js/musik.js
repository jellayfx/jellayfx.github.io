document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('latarBelakangMusik');
    const tombol = document.getElementById('tombolMusik');
    const teksKontrol = document.getElementById('teksKontrol');
    
    // Status awal (kita anggap belum dimainkan)
    let isPlaying = false; 

    if (audio && tombol && teksKontrol) {
        
        tombol.addEventListener('click', function(event) {
            // Mencegah tindakan default tautan (navigasi)
            event.preventDefault(); 
            
            // Logika Toggle Play/Pause
            if (isPlaying) {
                // Saat ini sedang diputar, jadi kita akan menjeda
                audio.pause();
                isPlaying = false;
                teksKontrol.textContent = '▶️ Play Musik';
                console.log('Musik dijeda.');
                
            } else {
                // Saat ini sedang dijeda, jadi kita akan memutar
                audio.play()
                    .then(() => {
                        isPlaying = true;
                        teksKontrol.textContent = '⏸️ Pause Musik';
                        console.log('Musik mulai diputar.');
                    })
                    .catch(error => {
                        // Ini akan menangani masalah jika Autoplay diblokir
                        console.error('Gagal memutar audio:', error);
                        alert("Gagal memutar musik. Pastikan Anda sudah berinteraksi dengan halaman.");
                        isPlaying = false;
                        teksKontrol.textContent = '▶️ Play Musik (Gagal)';
                    });
            }
        });
        
    } else {
        console.error('ERROR: Pastikan semua ID (latarBelakangMusik, tombolMusik, teksKontrol) sudah benar di HTML.');
    }
});
