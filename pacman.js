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

//X = Wall, O = Skip Path, p = Pac-Man, ' ' = food pellets
//b = Blue Ghost, o = Orange Ghost, P = Pink Ghost, r = Red Ghost
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    loadImages();
}

function loadImages() {
    wallImage = new Image();
    wallImage.src = "./assets/wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "./assets/blueGhost.png";
    orangeGhostImage = new Image();
    orangeGhostImage.src = "./assets/orangeGhost.png";
    pinkGhostImage = new Image();
    pinkGhostImage.src = "./assets/pinkGhost.png";
    redGhostImage = new Image();
    redGhostImage.src = "./assets/redGhost.png";

    pacmanUpImage = new Image();
    pacmanUpImage.src = "./assets/pacmanUp.png";
    pacmanDownImage = new Image();
    pacmanDownImage.src = "./assets/pacmanDown.png";
    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "./assets/pacmanLeft.png";
    pacmanRightImage = new Image();
    pacmanRightImage.src = "./assets/pacmanRight.png";
}