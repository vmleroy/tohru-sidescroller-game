// import "modules/class/spriteClass.js";
// import "modules/class/characterClass.js";

const gravity = 3;
var speed = 8;
var jumpHeigth = 120;

//Defining tohru sprite sheet
let tohruImage = new Image();
tohruImage.src = 'img/character/tohru4_2.png';

tohruWidth = 150;
tohruHeigth = 150;
let tohru = new Sprite (70, 380, tohruWidth, tohruHeigth, tohruImage);

let tohruMatrix = createMatrix(8, 4, tohruWidth, tohruHeigth);
tohru.setMatriz(tohruMatrix, tohruWidth, tohruHeigth)

let tohruCh = new Character(tohru, speed, gravity, jumpHeigth, 380);
tohruCh.setSpritesPosition(0, 9, 18, 27, 8, 8, 6, 4);