//Class to create the character
class Character {
    constructor(sprite, speed, gravity, jumpHeigth, startY) {
        this.sprite = sprite;
        this.startY = startY;
        this.spriteFrameMove = 0;
        this.gravity = gravity;
        this.falling = 0;
        this.jumpHeigth = jumpHeigth;
        this.jumpTimes = 0;
        this.jumpSpeed = 0;
        this.speed = speed;
        this.hp = 3;
        this.line = 1;
        this.ableToShot = 1;
    }

    setSpritesPosition(spriteFrameMove, spriteFrameJump, spriteFrameDie, spriteFramePunch, spriteFrameMoveMax, spriteFrameJumpMax, spriteFrameDieMax, spriteFramePunchMax) {
        this.spriteFrameMove = spriteFrameMove;
        this.spriteFrameJump = spriteFrameJump;
        this.spriteFrameDie = spriteFrameDie;
        this.spriteFramePunch = spriteFramePunch;
        this.spriteFrameMoveMax = spriteFrameMoveMax;
        this.spriteFrameJumpMax = spriteFrameJumpMax;
        this.spriteFrameDieMax = spriteFrameDieMax;
        this.spriteFramePunchMax = spriteFramePunchMax;

        this.dieRepetition = 0;
    }

    spriteChange(sprite) {
        this.sprite = sprite;
    }

    draw(ctx) {
        this.sprite.draw(ctx);
    }

    spriteMovement(ctx) {
        if(this.hp > 0)
            this.sprite.drawWithSheet(ctx, this.spriteFrameMoveMax, this.spriteFrameMove, 0);
        else {            
            if(tohruCh.sprite.update == 1) {
                this.dieRepetition++;      
            }
            if(this.dieRepetition < this.spriteFrameDieMax)  {                                
                if(this.dieRepetition == 0) {
                    this.sprite.resetFrameSprite(); 
                }
                this.sprite.drawWithSheet(ctx, this.spriteFrameDieMax, this.spriteFrameDie);    
            }
            else {
               this.sprite.drawWithSheet(ctx, 1, this.spriteFrameDie + this.spriteFrameDieMax - 1);
            }
        }
    }

    movementAndActions(keysPressed) {
        if(this.hp > 0) {
            if(keysPressed[37] == true) {
                this.sprite.x -= this.speed;
            }
            if(keysPressed[39] == true) {
                this.sprite.x += this.speed;
            }
            if(keysPressed[38] == true) {
                this.jumpTimes = 1;
            }
            if(keysPressed[90] == true) {
                if(this.ableToShot == 1) {
                    this.ableToShot = 0;
                    createShot();
                }
            }
        }
    }

    increaseJumpSpeed() {
        if(this.sprite.y <= (this.startY - this.jumpHeigth) || this.falling == 1) {
            if(this.falling == 0) {
                this.falling = 1;
            }
            this.jumpSpeed += this.gravity;
        }
        else {
            this.jumpSpeed -= this.gravity;
        }
    }

    jump()  {
        if(this.jumpTimes == 1) {
            jumpValidation();
            this.sprite.y += this.jumpSpeed;
            console.log(this.jumpSpeed);
        }
        if(this.startY < this.sprite.y) {
            this.sprite.y = this.startY;
            this.jumpTimes = 0;
            this.jumpSpeed = 0;
            this.falling = 0;
        }
    }

    changeLife(change, ctx) {
        if(this.hp > 0)
            this.hp += change;
    }

    // mouseMovement(event) {
    //     this.sprite.x = event.offsetX - this.sprite.width/2;
    //     this.sprite.y = event.offsetY - this.sprite.height/2;
    // }
}