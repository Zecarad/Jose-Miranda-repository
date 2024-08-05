// script.js

// Add click event to each image to enlarge it
var images = document.querySelectorAll('.project-card img');
images.forEach(function(img) {
    img.addEventListener('click', function() {
        if (this.classList.contains('enlarged')) {
            this.classList.remove('enlarged'); // Volver al tamaño original
        } else {
            this.classList.add('enlarged'); // Duplicar tamaño
        }
    });
});
