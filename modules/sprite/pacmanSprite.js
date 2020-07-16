// import "modules/utilityFunctions.js";
// import "modules/movementFunctions.js";

function pacMan(x, y) {
    /*Pac man drawing fuction: when the player get the pac man
    he will become this character and will kill every enemy for
    5s*/ 
    ctx.fillStyle = 'rgb(219,196,46,86)';
        ctx.beginPath();
        ctx.arc(x, y, 22, grauParaRadiano(30), grauParaRadiano(330));
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();        
}
