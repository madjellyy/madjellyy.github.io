document.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action, although not strictly necessary for the entire document
    var audio = document.getElementById('audio');
    audio.currentTime = 0; // Reset the audio to the start
    audio.play().catch(error => {
        console.error('Audio playback failed:', error);
    });
});
