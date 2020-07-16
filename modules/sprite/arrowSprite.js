// import "modules/class/spriteClass.js";
// import "modules/class/characterClass.js";

// import {Arrow} from 'modules/class/arrowClass.js';
// import {Sprite} from 'modules/class/spriteClass.js';

//Defining the arrow image
let arrowImage = new Image();
arrowImage.src = 'img/enimies/arrow.png';


let arrowSprite = [];
//arrowSprite[0] = new Sprite(400, 85, 48, 13, arrowImage);

let arrowNumbersSpawned = 0

let arrows = [];

function arrowsCreate(ctx, arrowNumbers) {
        //arrowNumebers = Math.random() * 5 + 5;
        x = canvasEl.width;
        for(i=0; i<arrowNumbers; i++) {
            /* if((y = Math.random() * canvasEl.height) < 13 || (y = Math.random() * canvasEl.height) > 387) {
                y = Math.random() * canvasEl.height;
            } */
            if(Math.round(Math.random() * 50) < 25)
                y = 415;
            else
                y = 450;
            //arrowSprite.push(new Sprite(x, y, 48, 13, arrowImage, Math.random() * 2 + 1));
            arrowSprite.push(new Sprite(x, y, 48, 13, arrowImage));
        }
        for(i=0; i<arrowSprite.length; i++) {
            arrows.push(new Arrow(arrowSprite[i]));
        }
    }

function arrowDestroyed() {
    arrowNumbersSpawned--;
}

function moveArrows(arrows, ctx) {
    //console.log(arrows.length);
    for(i=0; i<arrowNumbersSpawned; i++) {
        arrows[i].draw(ctx);
    }
}

function spawnArrow(arrow, ctx, arrowNumbers) {
    if(arrowNumbersSpawned <= arrowNumbers)
        arrow[arrowNumbersSpawned].draw(ctx);
        arrowNumbersSpawned++;
}