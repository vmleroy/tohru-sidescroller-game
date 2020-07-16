//Class to create arrows
class Arrow  {
    constructor(sprite, line) {
        this.sprite = sprite;   
        this.speed = Math.random() * 6 + 3;     
        this.ableToDestroy = false;
        this.line = line;
    }   

    // get center() {
    //     x: this.x + this.sprite.width/2;
    //     y: this.y + this.sprite.height/2;
    // }

    draw(ctx) {
        if(this.sprite.x <= -50) {
            if(Math.round(Math.random() * 50) < 25)
                this.sprite.y = 415;
            else
                this.sprite.y = 450;
            this.sprite.x = canvasEl.width;
            this.speed = Math.random() * 6 + 3;             
        }
        this.movement();
        this.sprite.draw(ctx);
    }

    movement() {
        this.sprite.x -= this.speed;
    }

    canBeDestroyed(ctx) {
        if(this.ableToDestroy == true) {
            this.sprite.x = -500;
            this.sprite.draw(ctx);
            arrowDestroyed();
        }
    }

    redraw(ctx) {
        if(Math.round(Math.random() * 50) < 25)
            this.sprite.y = 415;
        else
            this.sprite. y = 450;
        this.sprite.x = canvasEl.width;
        this.speed = Math.random() * 6 + 3;   
    }
}