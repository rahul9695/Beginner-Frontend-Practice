const keyDisplay = document.getElementById('keyDisplay');
const keyCodeDisplay = document.getElementById('keyCodeDisplay');

document.addEventListener('keydown', (event) => {
    keyDisplay.innerHTML = `You pressed : <span id="pressed-key">${event.key}</span>`;
    keyCodeDisplay.textContent = `${event.keyCode}`;
});