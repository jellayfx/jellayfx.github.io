// Function untuk memutar musik
function putarMusik() {
    // Mendapatkan elemen audio dari ID "latarBelakangMusik"
    const audio = document.getElementById('latarBelakangMusik');
    
    // Cek apakah elemen audio ditemukan
    if (audio) {
        // Mencoba memutar audio
        audio.play()
            .then(() => {
                // Berhasil diputar (meskipun browser modern sering memblokir autoplay)
                console.log('Musik otomatis mulai diputar.');
            })
            .catch(error => {
                // Gagal diputar (biasanya karena browser memblokir autoplay tanpa interaksi pengguna)
                console.error('Gagal memutar musik otomatis:', error);
                
                // Berikan instruksi kepada pengguna untuk mengklik sesuatu
                // Anda bisa menambahkan pesan di UI/tampilan jika ini terjadi
                console.log('Browser memblokir autoplay. Coba tambahkan tombol/interaksi pengguna untuk memicu pemutaran.');
            });
    } else {
        console.error('Elemen audio dengan ID "latarBelakangMusik" tidak ditemukan.');
    }
}

// Memanggil fungsi putarMusik setelah seluruh konten halaman dimuat
// Jika Anda ingin memutar segera, Anda bisa panggil langsung, tetapi ini lebih aman.
document.addEventListener('DOMContentLoaded', putarMusik);

// Catatan Penting:
// Banyak browser modern (Chrome, Safari, Firefox) memblokir pemutaran otomatis
// audio/video (autoplay) jika tidak ada *interaksi pengguna* (klik/sentuh) sebelumnya.
// Solusi terbaik adalah membuat tombol "Mainkan Musik" yang diklik pengguna,
// atau hanya mengizinkan autoplay jika file audio disetel ke `muted`.
// Namun, kode di atas adalah cara standar untuk mencoba autoplay.
