const container = document.querySelector('[data-container]');
const colors = ["#10ac84",'#5f27cd','#ff9f43','#01a3a4','#8395a7'];
const SQUARES = 500;


for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.className = 'square';

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);


    container.append(square);
}

function setColor(e) {
    let color = generateColor();
    e.target.style.background = color;
    e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
    e.target.style.background = '#1d1d1d';
    e.target.style.boxShadow = '0 0 2px #000';
}

function generateColor() {
    return colors[Math.floor(Math.random()* colors.length)];
}