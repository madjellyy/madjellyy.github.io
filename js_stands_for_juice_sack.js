document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "i_best_cat.webp",
        "i_cat_mogus.jpg",
        "i_cup_cat.png",
        "i_daisy_cat.webp"
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('current-image');

    if (!imageElement) {
        console.error('Image element not found!');
        return;
    }

    const changeImage = () => {
        console.log('Event Triggered!');
        console.log('Current Index:', currentIndex);

        currentIndex = (currentIndex + 1) % images.length;
        const newImage = images[currentIndex];

        imageElement.src = newImage;

        document.body.style.backgroundImage = `url(${newImage})`;

        console.log('New Image Path:', newImage);
    };

    imageElement.addEventListener('pointerdown', changeImage);

    document.body.style.backgroundImage = `url(${images[0]})`;
});
