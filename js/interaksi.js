document.getElementById('tampilkan-qris-gopay-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    var galeriWadah = document.getElementById('galeri-qris-gopay-tersembunyi');
    var buttonText = document.getElementById('button-text-toggle');
    
    if (galeriWadah.classList.contains('tersembunyi')) {
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = 'Sembunyikan Qris Gopay';
    } else {
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = 'Lihat Qris Gopay';
    }
});
