// board variables
let board;
let columnCount = 19;
const rowCount = 21;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;
let context;

let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
}

function loadImage() {
    wallImage = new Image();
    wallImage.src = "./assets/wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "./assets/blueGhost.png";
    orangeGhostImage = new Image();
    orangeGhostImage.src = "./assets/orangeGhost.png";
    pinkGhostImage = new Image();
    pinkGhostImage.src = "./assets/pinkGhost.png";
    redGhostImage = new Image();
}