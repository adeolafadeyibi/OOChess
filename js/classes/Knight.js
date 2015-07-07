

//CREATING KNIGHT OBJECTS
function Knight(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
}
//Declaring Knight as subclass
Knight.prototype = new ChessPiece();

/*Creating makeMove() for Knight Object
Checks for valid moves for object, moves obj in board array
then redraws board
*/
Knight.prototype.makeMove = function (name, newX, newY) {

    var piece = this;
    var piece = this.getCoordinates();

    if ((piece.x + 2 == newX) && (piece.y + 1 == newY) ||
		(piece.x + 2 == newX) && (piece.y - 1 == newY) || 
		(piece.x + 1 == newX) && (piece.y + 2 == newY) ||
		(piece.x + 1 == newX) && (piece.y - 2 == newY) || 
		(piece.x - 2 == newX) && (piece.y - 1 == newY) || 
		(piece.x - 2 == newX) && (piece.y + 1 == newY) || 
		(piece.x - 1 == newX) && (piece.y + 2 == newY) || 
		(piece.x - 1 == newX) && (piece.y - 2 == newY)) {

        if (arr[newY][newX] instanceof ChessPiece) {
            if (arr[newY][newX].team !== this.team) {
                arr[newY][newX] = this;
                arr[piece.y][piece.x] = undefined;
                this.setCount();
                this.kindaLegal();
            }
        } else if (arr[newY][newX] == undefined) {
            arr[newY][newX] = this;
            arr[piece.y][piece.x] = undefined;
            console.log("moved after checking for same team");
            this.setCount();
            this.kindaLegal();

        }
    } else {
        return false;
    }

    drawBoard();
    return arr;

}