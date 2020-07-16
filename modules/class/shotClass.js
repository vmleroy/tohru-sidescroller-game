class Shot {
    constructor(sprite){
        this.sprite = sprite;
        this.speed = 10;
    }
    
    draw(ctx) {
        this.movement();
        this.sprite.draw(ctx);
    }

    movement() {
        this.sprite.x += this.speed;
    }

    canBeDestroyed(ctx, enemy) {
        if(this.sprite.x >= ctx.width || this.sprite.collision(enemy)) {
            return true;
        }
    }
}