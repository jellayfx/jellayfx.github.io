document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('latarBelakangMusik');
    const tombol = document.getElementById('tombolMusik');
    const teksKontrol = document.getElementById('teksKontrol');

    // 1. DAFTAR LAGU: Definisikan semua jalur (path) file musik Anda di sini
    const daftarLagu = [
        'https://jellayfx.github.io/mp3/Mulak%20Dakdanak%20(Official%20Music%20Video)%20Osen%20Hutasoit%20-%20Osen%20Hutasoit.mp3', // Ganti dengan jalur file musik Anda
        'https://jellayfx.github.io/mp3/Ko%20Bikin%20Sa%20Nih%20Salting%20%20SALTING%20Ko%20Paling%20Manis%20(%20Lirik%20)%20-%20MJI%20OFICIAL.mp3',
        'https://jellayfx.github.io/mp3/Joji%20-%20%20Glimpse%20of%20Us%20-%2088rising.mp3',
        'https://jellayfx.github.io/mp3/New%20West%20-%20Those%20Eyes%20(slowed%20%2B%20reverb)%20-%20heyyyla.mp3',
        'https://jellayfx.github.io/mp3/OST%20%20-%20Stay%20With%20Me%20.mp3',
        'https://jellayfx.github.io/mp3/Radiohead%20-%20Creep%20-%20Radiohead.mp3',
        'https://jellayfx.github.io/mp3/Sa%20Stop%20Mabok_(Lampu1Comedy)_Lirik%20sa%20janji%20trakan%20Mabok%20Mabok%20lagi%20-%20Ringkas99.mp3',
        'https://jellayfx.github.io/mp3/Silent%C3%B3%20-%20Watch%20Me%20(WhipNae%20Nae)%20(Official).mp3',
        'https://jellayfx.github.io/mp3/TUTU%20-%20Alma%20Zarza%20(Official%20Lyrical%20Video)%20-%20Alma%20Zarza.mp3',
        'https://jellayfx.github.io/mp3/Dj%20salting%20%20dj%20salting%20remix%20slowed%20reverb%20%20tiktok%20-%20DJ%20Rainbow.mp3',
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
