document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('latarBelakangMusik');
    const tombol = document.getElementById('tombolMusik');
    const teksKontrol = document.getElementById('teksKontrol');

    // 1. DAFTAR LAGU: Definisikan semua jalur (path) file musik Anda di sini
    const daftarLagu = [
        'https://ciindysrg.github.io/assets/audio/17mashup.mp3', // Ganti dengan jalur file musik Anda
        'https://ciindysrg.github.io/assets/audio/akudulu.mp3',
        'https://ciindysrg.github.io/audio/sygbanget.mp3',
        'https://ciindysrg.github.io/audio/jagaselaluhatimu.mp3',
        'https://jellayfx.github.io/mp3/Angels%20Like%20You%20-%20Miley%20Cyrus%20%20Slowed%20%20Reverb%20TikTok%20Version.mp3'
    ];
    
    // Status untuk mengetahui apakah pemutar sedang aktif atau tidak
    let isPlaying = false; 

    // Fungsi untuk memilih lagu secara acak dan memutarnya
    function mainkanLaguAcak() {
        // Mendapatkan indeks acak dari 0 hingga (panjang daftarLagu - 1)
        const indeksAcak = Math.floor(Math.random() * daftarLagu.length);
        const laguAcakURL = daftarLagu[indeksAcak];

        // 2. Mengatur sumber (src) audio ke lagu acak
        audio.src = laguAcakURL;
        
        // Memuat ulang audio agar sumber baru terdeteksi
        audio.load();

        // 3. Memutar audio
        audio.play()
            .then(() => {
                isPlaying = true;
                teksKontrol.textContent = '⏸️ Pause Musik (Acak)';
                console.log('Memutar lagu acak:', laguAcakURL);
            })
            .catch(error => {
                console.error('Gagal memutar lagu acak. Autoplay mungkin diblokir:', error);
                alert("Musik diblokir. Silakan klik lagi atau izinkan pemutaran otomatis.");
                isPlaying = false;
                teksKontrol.textContent = '▶️ Play Musik (Blokir)';
            });
    }

    // Event Listener untuk Tombol Klik
    if (audio && tombol && teksKontrol && daftarLagu.length > 0) {
        
        tombol.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            if (isPlaying) {
                // Jika sedang diputar: Jeda (Pause)
                audio.pause();
                isPlaying = false;
                teksKontrol.textContent = '▶️ Play Musik Acak';
                console.log('Musik dijeda.');
                
            } else {
                // Jika sedang dijeda: Pilih dan mainkan lagu acak baru
                mainkanLaguAcak();
            }
        });
        
    } else {
        console.error('ERROR: Pastikan elemen HTML dan daftarLagu sudah terdefinisi.');
    }
    
    // Opsional: Atur agar setiap kali lagu selesai, lagu acak baru dimainkan
    // Jika loop dihapus dari tag <audio>, ini akan berfungsi sebagai "shuffle".
    audio.addEventListener('ended', function() {
        console.log('Lagu selesai, memutar lagu acak berikutnya...');
        mainkanLaguAcak();
    });
});
