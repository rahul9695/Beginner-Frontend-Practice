const textAreaInput = document.getElementById('textAreaInput');

const storedInputValue = localStorage.getItem("inputValue");

if(storedInputValue) {
    textAreaInput.innerText = storedInputValue;
}

textAreaInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    localStorage.setItem("inputValue", inputValue);
})