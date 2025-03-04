console.log("ttt");
const images = [
    "i_best_cat.webp",
    "i_cat_mogus.jpg",
    "i_cup_cat.png",
    "i_daisy_cat.webp",
    "i_sog.jpg",
    "i_alein_cat.jpg",
    "empty"
];

let currentIndex = 0;

const imageElement = document.getElementById('current-image');
console.log("Ran");
console.log(imageElement);
imageElement.addEventListener('click', function() {
  console.log('Button clicked!');
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
