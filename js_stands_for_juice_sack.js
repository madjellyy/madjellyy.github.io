console.log("sigma");
//fyi if ur reading this, consider doing all three
// find god
// get a job
// and GET OUT!
const images = [
    "i_best_cat.webp",
    "i_cat_mogus.jpg",
    "i_cup_cat.png",
    "i_daisy_cat.webp"
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('current-image');

    if (!imageElement) {
        console.error('Image element not found!');
        return;
    }

    const changeImage = () => {
        console.log('Event Triggered!');
        console.log('Current Index:', currentIndex);

        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];

        console.log('New Image Path:', images[currentIndex]);
    };

    imageElement.addEventListener('pointerdown', changeImage);
    imageElement.addEventListener('touchstart',changeImage);
});

