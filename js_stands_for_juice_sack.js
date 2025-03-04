const images = [
    "i_best_cat.webp",
    "i_cat_mogus.jpg",
    "i_cup_cat.png",
    "i_daisy_cat.webp"
];

let currentIndex = 0;

const imageElement = document.getElementById('current-image');

imageElement.addEventListener('click', () => {
    // Debugging: Check the current index and image
    console.log('Current Index:', currentIndex);
    console.log('Image Path:', images[currentIndex]);
    
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;  // Loop back to the first image
    }

    // Update the src of the image
    imageElement.src = images[currentIndex];

    // Debugging: Log the new image path
    console.log('New Image Path:', images[currentIndex]);
});
