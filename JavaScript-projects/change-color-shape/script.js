const shapeElement = document.getElementById('shape');
const changeShapeButton = document.getElementById('changeShape');
const changeColorButton = document.getElementById('changeColor');
const colorButtons = document.querySelectorAll('.color');

changeShapeButton.addEventListener('click', changeShape);
changeColorButton.addEventListener('click', changeColor);
colorButtons.forEach(button => {
    button.addEventListener('click', () => changeShapeColor(button.dataset.color));
});

function changeShape() {
    const shapes = ['circle', 'square', 'triangle', 'rectangle', 'diamond'];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeElement.className = `shape ${randomShape}`;
}

function changeColor() {
    const randomColor = getRandomColor();
    shapeElement.style.backgroundColor = randomColor;
}

function changeShapeColor(color) {
    shapeElement.style.backgroundColor = color;
}

function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta', 'brown'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Initial shape and color
changeShape();
changeColor();