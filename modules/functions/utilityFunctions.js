function grauParaRadiano(graus) {
    return (Math.PI * graus) / 180;
}

function createMatrix(spriteFrameX, spriteFrameY, baseWidth, baseHeight) {
    let matrix = [];
    for(i=0;i<=spriteFrameY;i++) {
        for(j=0;j<=spriteFrameX;j++) {
            matrix.push([j*baseWidth, i*baseHeight]);
            //console.log(matrix[j][i]);
        }
    }
    //console.table(matrix);
    return matrix;
}