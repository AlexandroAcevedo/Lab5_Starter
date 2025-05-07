// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //constants that shouldn't be changed
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti();

  //updating horn img/audio based on selection

  hornSelect.addEventListener('change',()=>{
    const selectedHorn = hornSelect.value;
    switch (selectedHorn){
      case 'air-horn':
        hornImage.src = './assets/images/air-horn.svg';
        hornAudio.src = './assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        hornImage.src = './assets/images/car-horn.svg';
        hornAudio.src =  './assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        hornImage.src = './assets/images/party-horn.svg';
        hornAudio.src =  './assets/audio/party-horn.mp3';
        break;
      default:
        hornImage.src = './assets/images/no-image.png';
        hornAudio.src = '';
        break;
    }
  });

  //volume adjuster
  volumeSlider.addEventListener('input',()=>{
    const volume = volumeSlider.value;
    hornAudio.volume = volume /100;

    if (volume == 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
  } else if (volume < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
  } else if (volume < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
  } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
  }

  });
  //confetti trigger
  playButton.addEventListener('click', () => {
    if (hornAudio.src) {
        hornAudio.play();
        if (hornSelect.value === 'party-horn') {
            jsConfetti.addConfetti();
        }
    }
});

  

}