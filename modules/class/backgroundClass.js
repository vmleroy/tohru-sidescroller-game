//Class to create background
class Background {
    constructor(sprite, image, speed) {
        this.sprite = sprite;
        this.image = image;
        this.speed = speed;
    }
    draw(ctx) {
        this.movement(ctx);
        this.sprite.draw(ctx);
        ctx.drawImage(this.image, this.sprite.x + this.sprite.width, this.sprite.y, this.sprite.width, this.sprite.height);
        ctx.drawImage(this.sprite.image, this.sprite.x + this.sprite.width * 2, this.sprite.y, this.sprite.width, this.sprite.height);
    }
    movement(ctx) {
        if(this.sprite.x <= -(canvasEl.width * 2)) {
            this.sprite.x = 0;
        }
        else {
            this.sprite.x -= this.speed;
        }        
    }
}