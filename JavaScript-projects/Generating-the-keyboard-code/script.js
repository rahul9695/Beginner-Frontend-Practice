const keyDisplay = document.getElementById('keyDisplay');
const keyCodeDisplay = document.getElementById('keyCodeDisplay');
const keyHistoryDisplay = document.getElementById('keyHistoryDisplay');

const maxKeyHistoryLength = 8;
const keyHistory = [];

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const code = event.code;
    const ctrlKey = event.ctrlKey;
    const altKey = event.altKey;
    const shiftKey = event.shiftKey;
    const metaKey = event.metaKey;
    const keyCombination = `${ctrlKey ? 'Ctrl + ' : ''}${altKey ? 'Alt + ' : ''}${shiftKey ? 'Shift + ' : ''}${metaKey ? 'Meta + ' : ''}${key}`;

    keyCodeDisplay.style.display = "block";
    // Play a sound on keypress
    playKeyPressSound();

    keyDisplay.innerHTML = `You pressed : <span id="pressed-key">${event.key}</span>`;
    keyCodeDisplay.innerHTML = `<span id="keyCodeText">keycode :</span><span> ${event.keyCode}</span>`;

    // Store key history
    keyHistory.push(keyCombination);
    if (keyHistory.length > maxKeyHistoryLength) {
        keyHistory.shift(); // Remove the oldest entry when it exceeds the maximum length
    }
    updateKeyHistoryDisplay();

    event.preventDefault(); // Prevent default browser actions for certain key combinations
});

function updateKeyHistoryDisplay() {
    // Display key history
    keyHistoryDisplay.innerHTML = 'Key History : ' + keyHistory.join(', ');
    keyHistoryDisplay.style.display = "block";
}

function playKeyPressSound() {
    const audio = new Audio('keypress.mp3'); // Replace 'keypress.mp3' with the path to your desired sound file
    audio.play();
}