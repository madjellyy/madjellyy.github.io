document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function() {
      var audio = document.getElementById('myAudio');
      if (audio) {
        audio.volume = 1;
        audio.play();
      }
    });
  });