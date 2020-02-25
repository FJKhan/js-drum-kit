
const drumPieces = document.querySelectorAll('.drum-piece');
drumPieces.forEach(drumPiece => drumPiece.addEventListener('transitionend', removeTransitionEffects));

function removeTransitionEffects(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing');
}

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    const key = document.querySelector(`.drum-piece[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener("keydown", playAudio);