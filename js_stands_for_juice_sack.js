const images = [
    "i_cat_mogus.jpg",
    "i_best_cat.webp",
    "i_cup_cat.png",
    "i_daisy_cat.webp"
];

let currentIndex = 0;

const imageElement = document.getElementById('current-image');

imageElement.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;  // Loop back to the first image
    }
    imageElement.src = images[currentIndex];
});
