let score = 0;
let scoreAux = 0;
let scoreTotal = 0
let gamePause = 0;
let gameStop = 0;
//Update function
let start = 0;

var distance = 0;

function updateGame() {
    if((gameStop == 0) && (gamePause == 0)) {
        if(start == 0) {
            if(wave1.ableToStart == true)
                createSprites(wave1);
            if(wave2.ableToStart == true)
                createSprites(wave2);
            if(wave3.ableToStart == true)
                createSprites(wave3);
            start++;
        }
            if(wave1.ableToStart == true) {
                updateTimeFunction(wave1);
                drawGame(wave1);
            }
            if(wave2.ableToStart == true) {
                updateTimeFunction(wave2);
                drawGame(wave2);
            }
            if(wave3.ableToStart == true) {
                updateTimeFunction(wave3);
                drawGame(wave3);
            }
        characterControl();
        collision();
        resetUpdateTimeFunction();
        distanceUpdate();
    }
    else {        
        spriteChangeUpdate();
            if(wave1.ableToStart == true) {
                drawGameAfterDead(wave1);
            }
            if(wave2.ableToStart == true) {
                drawGameAfterDead(wave2);
            }
            if(wave3.ableToStart == true) {
                drawGameAfterDead(wave3);
            }     
        resetUpdateTimeFunction();            
        ctx.font =  "100px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("GAME OVER", 480, 300);
    }
        
}

function distanceUpdate() {
    if(score == wave1.distance && wave2.ableToStart == false) {
        wave2.ableToStart = true;
        wave1.ableToStart = false;
        start = 0;
        score = 0;
        arrows.splice(0,wave1.arrowNumbers);
    }
    if(score == wave2.distance && wave3.ableToStart == false) {
        wave3.ableToStart = true;
        wave2.ableToStart = false;
        start = 0;
        score = 0;
        arrows.splice(0,wave2.arrowNumbers);
    }
}

//Change line
// function line(line) {
//     if(line == 1) {
//         return 450;
//     }
//     if(line == 2) {
//         return 400;
//     }
//     if(line == 3) {
//         return 350;
//     }
// }


//Character control
function characterControl() {
    tohruCh.movementAndActions(keysPressed);
    
    //jump control
    if(tohruCh.jumpTimes == 1) {
        tohruCh.jump();
    }

    //End game
    if(tohruCh.hp <= 0) {
        gameStop = 1;
    }

    //Character collision
    for(i=0; i<arrows.length; i++) {
        //tohruCh.collision(arrow[i]);
        if(tohruCh.hp > 0) {
            if(tohruCh.sprite.collision(arrows[i].sprite)) {
                //(tohruCh.line == arrows[i].line) {
                    arrows[i].redraw(ctx);
                    tohruCh.changeLife(-1, ctx);
                //}
            }
        }
    }
}


//Create sprite function
function createSprites(wave) {
    backgroundCreate();
    arrowsCreate(ctx, wave.arrowNumbers);
    createHearts(3);
}


//Colision update function
function collision() {
    for(i=0; i<shot.length; i++) {
        for(j=0; j<arrows.length; j++){
            if(shot[i].canBeDestroyed(ctx, arrows[j].sprite)) {
                //if(tohruCh.line == arrows[j].line) {
                    // arrows[j].ableToDestroy = true;
                    // arrows[j].canBeDestroyed(ctx);
                    arrows[j].redraw(ctx);
                    shot.splice(i, 1);
                    //arrows.splice(j,1);
                    score += 50;
                    scoreTotal += 50;
                // }
            }
        }
    }
}


//Draw function
function drawGame(wave) {
    ctx.clearRect(0,0,canvasEl.width,canvasEl.height);
    background[wave.background].draw(ctx);
    backgroundGround.draw(ctx);
    //separateLine(ctx);
    drawHearts(ctx, tohruCh.hp);
    tohruCh.spriteMovement(ctx);  
    moveShot(shot, ctx);       
    moveArrows(arrows, ctx);
    ctx.font =  "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + scoreTotal, 10, 80);
}  

function drawGameAfterDead(wave) {
    ctx.clearRect(0,0,canvasEl.width,canvasEl.height);
    background[wave.background].draw(ctx);
    backgroundGround.draw(ctx);   
    tohruCh.spriteMovement(ctx);      
    for(i=0; i<arrowNumbersSpawned; i++) {
        arrows[i].sprite.draw(ctx);
    }
    ctx.font =  "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + scoreTotal, 10, 80);
}