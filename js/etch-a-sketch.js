const container = document.querySelector('#container');

drawGrid(20, container);

function drawGrid(size, container) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size ** 2; i++) {container.appendChild(createTile());}
}

function createTile() {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    return newTile;
}