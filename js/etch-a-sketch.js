const container = document.querySelector('#container');
const newDrawboard = document.querySelector('#newDrawboard');

newDrawboard.addEventListener('click', () => {createDrawboard()});

drawGrid(16, container);

function createDrawboard() {
    const size = prompt(`Size:`);

    while (container.children.length > 0) {
        container.removeChild(container.lastChild);
    }

    drawGrid(size, container);
};

function drawGrid(size, container) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {container.appendChild(createTile());}
}

function createTile() {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.addEventListener('mouseenter', e => {fillTile(e.target)});
    
    return newTile;
}

function fillTile(tile) {
    switch (tile.style.background) {
        case `rgba(0, 0, 0, 0.1)`:
            tile.style.background = `rgba(0, 0, 0, 0.2)`;
            break;
        case `rgba(0, 0, 0, 0.2)`:
            tile.style.background = `rgba(0, 0, 0, 0.3)`;
            break;
        case `rgba(0, 0, 0, 0.3)`:
            tile.style.background = `rgba(0, 0, 0, 0.4)`;
            break;
        case `rgba(0, 0, 0, 0.4)`:
            tile.style.background = `rgba(0, 0, 0, 0.5)`;
            break;
        case `rgba(0, 0, 0, 0.5)`:
            tile.style.background = `rgba(0, 0, 0, 0.6)`;
            break;
        case `rgba(0, 0, 0, 0.6)`:
            tile.style.background = `rgba(0, 0, 0, 0.7)`;
            break;
        case `rgba(0, 0, 0, 0.7)`:
            tile.style.background = `rgba(0, 0, 0, 0.8)`;
            break;
        case `rgba(0, 0, 0, 0.8)`:
            tile.style.background = `rgba(0, 0, 0, 0.9)`;
            break;
        case `rgba(0, 0, 0, 0.9)`:
            tile.style.background = `rgba(0, 0, 0, 1)`;
            break;
        case `rgb(0, 0, 0)`:
            break;
        default:
            tile.style.background = `rgba(0, 0, 0, 0.1)`;
            break;
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random();

    return `rgba(${r},${g},${b},${a})`;
}