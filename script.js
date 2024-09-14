const words = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'JAVA'];
const gridSize = 10;

function generateGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(String.fromCharCode(65 + Math.floor(Math.random() * 26))); // Letras aleatorias
        }
        grid.push(row);
    }
    return grid;
}

function displayGrid(grid) {
    const canvas = document.getElementById('wordSearchCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 400;
    const cellSize = canvas.width / gridSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            ctx.fillText(grid[i][j], j * cellSize + 10, i * cellSize + 25);
        }
    }
}

function populateWordList(words) {
    const wordList = document.getElementById('words');
    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        wordList.appendChild(li);
    });
}

window.onload = function () {
    const grid = generateGrid(gridSize);
    displayGrid(grid);
    populateWordList(words);
};
