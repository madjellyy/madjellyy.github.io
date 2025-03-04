document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "i_best_cat.webp",
        "i_cat_mogus.jpg",
        "i_cup_cat.png",
        "i_daisy_cat.webp"
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('current-image');
    const blurredBackground = document.getElementById('blurred-background');

    if (!imageElement || !blurredBackground) {
        console.error('Image elements not found!');
        return;
    }

    const changeImage = () => {
        console.log('Event Triggered!');
        console.log('Current Index:', currentIndex);

        currentIndex = (currentIndex + 1) % images.length;
        const newImage = images[currentIndex];

        imageElement.src = newImage;
        blurredBackground.style.backgroundImage = `url(${newImage})`;

        console.log('New Image Path:', newImage);
    };

    imageElement.addEventListener('pointerdown', changeImage);
    blurredBackground.style.backgroundImage = `url(${images[0]})`;
});
