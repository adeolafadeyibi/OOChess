//CREATING KING OBJECTS
function King(name) {
    this.name = name;
}
//Declaring Rook as subclass
King.prototype = new ChessPiece();

//Override Instance Method
King.prototype.makeMove = function (name, newX, newY) {


    var piece = this;

    var piece = this.getCoordinates();


    if ((piece.x - 1 == newX) && (piece.y + 1 == newY) || 
		(piece.x + 0 == newX) && (piece.y + 1 == newY) || 
		(piece.x + 1 == newX) && (piece.y + 1 == newY) || 
		(piece.x + 1 == newX) && (piece.y - 1 == newY) || 
		(piece.x - 1 == newX) && (piece.y - 0 == newY) || 
		(piece.x + 0 == newX) && (piece.y - 0 == newY) || 
		(piece.x - 1 == newX) && (piece.y - 0 == newY) || 
		(piece.x + 1 == newX) && (piece.y - 0 == newY) || 
		(piece.x - 1 == newX) && (piece.y - 1 == newY) || 
		(piece.x + 0 == newX) && (piece.y - 1 == newY)) {

        if (arr[newY][newX] instanceof ChessPiece) {
            if (arr[newY][newX].team !== this.team) {
                arr[newY][newX] = this;
                arr[piece.y][piece.x] = undefined;
                console.log("undefined so now moved piece");
                this.setCount();
                console.log(arr[newY][newX], "this newY and newX");

            }
        } else if (arr[newY][newX] == undefined) {
            arr[newY][newX] = this;
            arr[piece.y][piece.x] = undefined;
            console.log("moved after checking for same team");
            this.setCount();

        }
    } else {
        console.log("not valid move");
    }

    drawBoard();
    return arr;


}
King.prototype.isCheckMate = function () {
    alert("Checking Checkmate");
}
