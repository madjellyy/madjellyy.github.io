document.getElementById('playImage').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.currentTime = 0; // Reset the audio to the start
    audio.play();          // Play the audio
});
