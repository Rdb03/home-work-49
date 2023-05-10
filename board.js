var boardSize = 8;
var whiteSquare = '██';
var blackSquare = '  ';
for (var i = 0; i < boardSize; i++) {
    var row = '';
    for (var j = 0; j < boardSize; j++) {
        if ((i + j) % 2 === 0) {
            row += whiteSquare;
        }
        else {
            row += blackSquare;
        }
    }
    console.log(row);
}
