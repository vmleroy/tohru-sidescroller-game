const updateTime = 15;

var characterSpriteChange = 45;
var charcaterShoot = 450;
var spawnEnemy = 900;
var jumpTime = 45;
var deltaSpawnEnemy = 0;
var deltaSprite = 0;
var deltaShot = 0;
var deltaJump = 0;

function updateTimeFunction(wave) {
    deltaShot += updateTime;
    deltaSpawnEnemy += updateTime;
    spriteChangeUpdate();
    if(deltaShot == charcaterShoot) {
        tohruCh.ableToShot = 1;
        deltaShot = 0;
    }
    if(deltaSpawnEnemy == spawnEnemy) {
        if(arrowNumbersSpawned < wave.arrowNumbers)
            spawnArrow(arrows, ctx, wave.arrowNumbers);
        deltaSpawnEnemy = 0;
    }
}

function jumpValidation() {
    deltaJump += updateTime;
    if(deltaJump == jumpTime) {
        tohruCh.increaseJumpSpeed();
        deltaJump = 0;
    }
}

function resetUpdateTimeFunction() {
    if(tohruCh.sprite.update == 1)
        tohruCh.sprite.update = 0;
}

function spriteChangeUpdate() {
    deltaSprite += updateTime;
    //console.log(deltaSprite)
    if(tohruCh.hp > 0) {
        if(deltaSprite == characterSpriteChange) {
            tohruCh.sprite.update = 1;
            deltaSprite = 0;
        }
    }
    else {
        characterSpriteChange = 150;
        if(deltaSprite == characterSpriteChange) {
            tohruCh.sprite.update = 1;
            deltaSprite = 0;                
        }
    }
}
