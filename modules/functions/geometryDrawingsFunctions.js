// import "utilityFunctions.js";
// import "movementFunctions.js";


// function separateLine(ctx) {
//     ctx.fillStyle = 'red';
//         ctx.beginPath();
//             ctx.moveTo(0, 560);
//             ctx.lineTo(1500, 560);
//         ctx.closePath();
//         ctx.stroke();
//     ctx.fillStyle = 'red';
//         ctx.beginPath();
//             ctx.moveTo(0, 510);
//             ctx.lineTo(1500, 510);
//         ctx.closePath();
//         ctx.stroke();
// }

function triForce(x, y) {
    /*When the player get the triforce he will become Link, the hero
    and will give more damage to the boss*/
    ctx.fillStyle = 'rgb(219,196,46,86)';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 15, y - 20);
        ctx.lineTo(x + 30, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    ctx.fillStyle = 'rgb(219,196,46,86)';
        ctx.beginPath();
        ctx.moveTo(x + 15, y - 20);
        ctx.lineTo(x + 30, y - 40);
        ctx.lineTo(x + 45, y - 20);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    ctx.fillStyle = 'rgb(219,196,46,86)';
        ctx.beginPath();
        ctx.moveTo(x + 45, y - 20);
        ctx.lineTo(x + 60, y);
        ctx.lineTo(x + 30, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
}

function sun(x, y) {
    /*When the player get the sun, the background will be changed*/ 
    ctx.fillStyle = 'rgb(212,175,44,83)'
        ctx.fillRect(x, y, 40, 40);
    ctx.fillStyle = 'rgb(214,143,32,84)'
        ctx.fillRect(x + 10, y + 10, 20, 20);
}
