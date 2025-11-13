document.getElementById('tampilkan-qris-gopay-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    var galeriWadah = document.getElementById('galeri-qris-gopay-tersembunyi');
    var buttonText = document.getElementById('button-text-toggle');
    
    if (galeriWadah.classList.contains('tersembunyi')) {
        galeriWadah.classList.remove('tersembunyi');
        buttonText.textContent = '>Thank You! ☕';
    } else {
        galeriWadah.classList.add('tersembunyi');
        buttonText.textContent = '>Buy Me A Coffee With GOPAY/QRIS';
    }
});
