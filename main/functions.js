function drawBoard() {
  for (let currentRow = 0; currentRow < row; currentRow++) {
    for(let currentCol = 0; currentCol < col; currentCol++) {
      const currentSquareColor = board[currentRow][currentCol];
      drawSquare(currentRow, currentCol, currentSquareColor);
    };
  };
};


function drawSquare(y, x, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * squares, y * squares, squares, squares);

  if (color == defaultColor) {
    ctx.strokeStyle = defaultBorder;
  };

  ctx.strokeRect(x * squares, y * squares, squares, squares);
}