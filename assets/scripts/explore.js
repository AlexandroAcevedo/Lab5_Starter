// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const selectedVoiceIndex = voiceSelect.value;
    const text = textInput.value;

    if (selectedVoiceIndex !== 'select' && text.trim() !== '') {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voices[selectedVoiceIndex];

      faceImage.src = 'assets/images/smiling-open.png';

      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };

      synth.speak(utterance);
    }
  });
}
