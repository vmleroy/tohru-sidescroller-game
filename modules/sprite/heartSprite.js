//Defining hearth image
let heartImage = new Image();
heartImage.src = 'img/character/heart_3.png';
let heartSprite = [];

function createHearts(heartNumbers) {
    let x = 20;
    let y = 20;
    for(i=0;i<heartNumbers;i++) {
        heartSprite.push(new Sprite(x,y,25,25,heartImage));
        x += 35;
    }
}

function drawHearts(ctx, heartNumbers)  {
    for(i=0;i<heartNumbers;i++) {
        heartSprite[i].draw(ctx);
    }
}

