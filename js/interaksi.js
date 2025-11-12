document.getElementById('tampilkan-instagram-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    var galeriWadah = document.getElementById('galeri-instagram-tersembunyi');
    var buttonText = document.getElementById('button-text-toggle');
    
    if (galeriWadah.classList.contains('tersembunyi')) {
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = 'Sembunyikan Galeri Instagram';
    } else {
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = 'Lihat Galeri Instagram';
    }
});
