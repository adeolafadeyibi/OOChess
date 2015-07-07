//CREATING PAWN OBJECTS
function Pawn(name) {
    this.name = name;
}
//Declaring Rook as subclass
Pawn.prototype = new ChessPiece();
Pawn.prototype.isFirstMove = true;
// && (arr[piece.x][piece.y+1]=='undefined')
//Override Instance Method
Pawn.prototype.makeMove = function (name, newX, newY) {
    var piece = this.getCoordinates();
    var pawnDirection;
    var firstMoveDirection;
    tempy = piece.y

    firstMoveDirection = (piece.team == 'black') ? -2 : 2;
    pawnDirection = (piece.team == 'black') ? -1 : 1;
    console.log('this is pawn direction', pawnDirection)

    if (((tempy + pawnDirection == newY) && (piece.x == newX)) && (arr[piece.y + pawnDirection][piece.x] == undefined)) {
        arr[tempy + pawnDirection][piece.x] = this;
        arr[tempy][piece.x] = undefined;
        this.setCount();
    }

    if (this.isFirstMove == true) {
        if (((tempy + firstMoveDirection == newY) && (piece.x == newX)) && (arr[piece.y + firstMoveDirection][piece.x] == undefined)) {
            arr[tempy + firstMoveDirection][piece.x] = this;
            arr[tempy][piece.x] = undefined;
            this.setCount();
        }
    }

    if (arr[newY][newX] instanceof ChessPiece) {
        if (((piece.y + pawnDirection == newY) && (piece.x - 1 == newX)) || ((piece.y + pawnDirection == newY) && (piece.x + 1 == newX))) {

            if (arr[newY][newX].team !== this.team) {
                arr[newY][newX] = this;
                arr[piece.y][piece.x] = undefined;
                this.setCount();
            }
        }
    }

    this.isFirstMove = false;
    drawBoard();
    return arr;
}
