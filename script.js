// script.js
(function() {
    // Array of image sources
    var images = [
        'logo.png',
        'logo1.png',
        'logo2.png',
        'logo3.png',
        // Add more image paths here
    ];

    var slide = document.getElementById('slide');
    var currentImageIndex = -1; // Initialize to -1 so the first random pick works correctly

    function showRandomSlide() {
        var randomIndex;
        // Ensure the new random index is different from the current one (optional, for better randomness)
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (randomIndex === currentImageIndex);

        currentImageIndex = randomIndex;
        slide.src = images[currentImageIndex]; // Set the image source

        // Change image every 3 seconds (3000 milliseconds)
        setTimeout(showRandomSlide, 2500);
    }

    // Start the slideshow
    showRandomSlide();
})();
