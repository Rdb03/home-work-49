const boardSize = 8;
const whiteSquare = '██';
const blackSquare = '  ';

for (let i = 0; i < boardSize; i++) {
  let row = '';
  for (let j = 0; j < boardSize; j++) {
    if ((i + j) % 2 === 0) {
      row += whiteSquare;
    } else {
      row += blackSquare;
    }
  }
  console.log(row);
}

