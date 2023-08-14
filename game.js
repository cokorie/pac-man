const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const pacmanFrames = document.getElementById("animation");
const ghostFrames = document.getElementById("ghosts");

let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};

let fps = 30;

let map = [
    [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1],
    [1,2,2,2,2, 2,2,2,2,2, 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1, 2,1,2,1,1, 1,1,1,2,1, 2,1,1,1,2, 1],
    [1,2,2,2,2, 2,1,2,2,2, 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,1,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,1, 1],
    [0,0,0,0,1, 2,1,2,2,2, 2,2,2,2,1, 2,1,0,0,0, 0],
    [1,1,1,1,1, 2,1,2,1,1, 2,1,1,2,1, 2,1,1,1,1, 1],
    [2,2,2,2,2, 2,2,2,1,2, 2,2,1,2,2, 2,2,2,2,2, 2],
    [1,1,1,1,1, 2,1,2,1,2, 2,2,1,2,1, 2,1,1,1,1, 1],
    [0,0,0,0,1, 2,1,2,1,1, 1,1,1,2,1, 2,1,0,0,0, 0],
    [0,0,0,0,1, 2,1,2,2,2, 2,2,2,2,1, 2,1,0,0,0, 0],
    [1,1,1,1,1, 2,2,2,1,1, 1,1,1,2,2, 2,1,1,1,1, 1],
    [1,2,2,2,2, 2,2,2,2,2, 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,2,2,1, 2,2,2,2,2, 2,2,2,2,2, 2,1,2,2,2, 1],
    [1,1,2,2,1, 2,1,2,1,1, 1,1,1,2,1, 2,1,2,2,1, 1],
    [1,2,2,2,2, 2,1,2,2,2, 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,2,1,1,1, 1,1,1,1,2, 1,2,1,1,1, 1,1,1,1,2, 1],
    [1,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1],
];

let gameLoop = () => {
    update();
    draw();
};

let update = () => {

};

let draw = () => {
    drawWalls();
};

let gameInterval = setInterval(gameLoop, 1000/fps);

let drawWalls = () => {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map.length; j++) {
            if(map[i][j] == 1) {
                createRect(j * 20, i * 20, 20, 20, "#342DCA")
            }
        }
    }
};