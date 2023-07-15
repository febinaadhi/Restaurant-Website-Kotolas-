// Add JavaScript functionality here

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//slide image

    // Retrieve the slider images
    const sliderImages = document.querySelectorAll('.slider-image');
    
    // Set the index of the currently displayed image
    let currentIndex = 0;
    
    // Function to switch to the next image
    function switchImage() {
      // Set the current image to opacity 0
      sliderImages[currentIndex].classList.remove('active');
      
      // Increment the index
      currentIndex = (currentIndex + 1) % sliderImages.length;
      
      // Set the next image to opacity 1
      sliderImages[currentIndex].classList.add('active');
    }
    
    // Automatically switch images every 6 seconds
    setInterval(switchImage, 6000);