// import "modules/class/spriteClass.js"
// import "modules/class/backgroundClass.js"

// import {Sprite} from 'modules/class/spriteClass.js';
// import {Background} from 'modules/class/backgroundClass.js';

//Defining background image
let backgroundName = ["img/bg/nuvens.jpg", "img/bg/nuvens_2.jpg", "img/bg/nuvensemontanhas.jpg", "img/bg/nuvensemontanhas_2.jpg",
                     "img/bg/nuvensemontanhas2.jpg", "img/bg/nuvensemontanhas2_2.jpg"];

let background = [];
function backgroundCreate() {
        for(i=0; i < backgroundName.length; i+=2) {
            let backgroundImage = new Image();
            backgroundImage.src = backgroundName[i];
            let backgroundImage2 = new Image();
            backgroundImage2.src = backgroundName[i+1];
            let backgroundSprite = new Sprite(0, 0, 1500, 520, backgroundImage);
            background.push(new Background(backgroundSprite, backgroundImage2, 0.5));
        }
    }


//Defining ground image
let groundImage = new Image();
groundImage.src = 'img/bg/chaozinhoDahora.png';

let groundSprite = new Sprite (0, 500, 1500, 150, groundImage);
let backgroundGround = new Background(groundSprite, groundImage, 3)