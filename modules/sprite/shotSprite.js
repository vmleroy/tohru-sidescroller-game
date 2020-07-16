//Defining shot sprite
let shotImage = new Image();
shotImage.src = "img/character/shot.png";

let shotSprite = 0;

let shot = [];
function createShot() {
    x = tohruCh.sprite.width/2 + 50 + tohruCh.sprite.x;
    y = tohruCh.sprite.height/2 - 55 + tohruCh.sprite.y;
    shotSprite = new Sprite(x, y, 50, 50, shotImage);
    shot.push(new Shot(shotSprite));
}

function moveShot(shot, ctx) {
    //console.log(arrows.length);
    for(i=0; i<shot.length; i++) {
        shot[i].draw(ctx);
    }
}
