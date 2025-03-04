const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
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
