console.log("v1);
const images = [
    "i_best_cat.webp",
    "i_cat_mogus.jpg",
    "i_cup_cat.png",
    "i_bingus.jpeg",
    "i_daisy_cat.webp",
    "i_sog.jpg",
    "i_alein_cat.jpg",
    "i_bath_cat.png",
    "i_zau.png",
    "i_cactus.png",
    "i_dumb_cat.png",
    "i_silly_car.jpeg",
    "i_not_real_cat.jpg",
    "i_computer_cat.webp",
    "i_pink_cat.webp",
    "empty"
];

let currentIndex = 0;

const randomImage = images[Math.floor(Math.random() * images.length)];
document.getElementById("current-image").src = randomImage;

const imageElement = document.getElementById('current-image');
console.log("Ran");
console.log(imageElement);
imageElement.addEventListener('click', function() {
  console.log('c');
});


imageElement.addEventListener('click', () => {
    console.log('Current Index:', currentIndex);
    console.log('Image Path:', images[currentIndex]);
    
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;  
    }

    imageElement.src = images[currentIndex];

    console.log('New Image Path:', images[currentIndex]);
});


