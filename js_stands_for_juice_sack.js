console.log("v7");

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
    "i_big_cat.jpg",
    "i_chonk.jpg",
    "i_luna.webp",
    "i_space_cat.png",
    "i_bug_cat.jpg",
    "i_cheesecake_cat.png",
    "i_bear_cat.jpeg",
];

// Fisher-Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(images); // shuffle once at page load

let currentIndex = 0; // start at first image after shuffle
const imageElement = document.getElementById('current-image');
imageElement.src = images[currentIndex];

// update function
function showImage(index) {
    currentIndex = (index + images.length) % images.length; // wrap around
    imageElement.src = images[currentIndex];
    console.log("Showing:", images[currentIndex]);
}

// button controls
document.getElementById("prev").addEventListener("click", () => {
    showImage(currentIndex - 1);
});

document.getElementById("next").addEventListener("click", () => {
    showImage(currentIndex + 1);
});

// optional: keep click-to-cycle forward
imageElement.addEventListener("click", () => {
    showImage(currentIndex + 1);
});


