//defining keys
/*
37 = left arrow, 38 = up arrow, 39 = right arrow, 40 = down arrow, 90 = Z
*/

let keysPressed = {37: false, 38: false, 39: false, 88: false, 90: false};

document.body.addEventListener('keydown', e => {
    // console.log('e=' + e.keyCode);
    if(e.keyCode in keysPressed) {
        keysPressed[e.keyCode] = true;
        // console.log("keyPressed=" + e.keyCode + "=" + keysPressed[e.keyCode]);
    }
    //tohruCh.movementAndActions(keysPressed);
});

document.body.addEventListener('keyup', e => {
    keysPressed[e.keyCode] = false;
    //console.log("keyPressed=" + e.keyCode + "=" + keysPressed[e.keyCode]);
});