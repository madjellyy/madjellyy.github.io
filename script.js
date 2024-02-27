document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "background.gif",
        "background2.gif",
        "background1.gif",
        "bricks.gif",
        "background3.gif",
        "background4.gif",
        "background5.gif",
        "trollgif.gif"
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
    
  });
});
