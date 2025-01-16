document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "background.png"
        // Add more image URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];   
    const backgroundElement = document.querySelector('.background-image');
    backgroundElement.style.backgroundImage = `url('${selectedImage}')`;
});

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    if (audio) {
      audio.volume = 1;
      audio.play();
    }
  });
});
