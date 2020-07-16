//Class to create sprites
class Sprite {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.update = 0;
    }

    get center() {
        return {
            x: this.x + this.width/2,
            y: this.y + this.height/2
        };
    }

    collision(enemy) {
        let a = Math.abs(this.center.x - enemy.center.x); 
        let b = Math.abs(this.center.y - enemy.center.y); 
        let d = Math.sqrt(a**2 + b**2);
        let r1 = this.height/2;
        let r2 = enemy.height/2;
        return d <= r1 + r2;
    }

    setMatriz(matriz, widthSprite, heightSprite) {
        this.matriz = matriz;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
        this.frameSprite = 0;
    }

    draw(ctx) {
        if(this.image) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        else {
            ctx.strokeRect(this.image, this.x, this.y, this.width, this.height);
        }                
    }

    resetFrameSprite() {
        this.frameSprite = 0;
    }

    drawWithSheet(ctx, frameSpriteMax, frameSpriteMoveStart) {        
        //console.log(this.frameSprite + "," + frameSpriteMoveY); 
        ctx.drawImage(this.image,
            this.matriz[this.frameSprite + frameSpriteMoveStart][0], this.matriz[this.frameSprite + frameSpriteMoveStart][1],
            this.width, this.height,
            this.x, this.y,
            this.widthSprite, this.heightSprite);  
        if(this.update == 1)
            this.animate(frameSpriteMax);
        //console.log(this.matriz[this.frameSprite][frameSpriteMoveY], this.matriz[this.frameSprite][frameSpriteMoveY + 1]);
    }

    animate(frameSpriteMax)  {
        this.frameSprite++;
            if (this.frameSprite>=frameSpriteMax) {
                this.frameSprite = 0;
            }
    }
}