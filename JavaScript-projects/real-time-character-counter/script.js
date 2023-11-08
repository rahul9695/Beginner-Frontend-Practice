const input = document.getElementById('input');
const totalChar = document.getElementById('total-char');
const remainingChar = document.getElementById('remaining-char');

let maxLength = input.maxLength;
remainingChar.innerText = maxLength;

input.addEventListener('keyup', (e) => {
    const valueLength = e.target.value.length;
    totalChar.innerText = valueLength;
    remainingChar.innerText = maxLength - valueLength;
})