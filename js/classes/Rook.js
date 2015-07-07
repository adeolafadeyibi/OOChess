//CREATING ROOK OBJECTS
function Rook(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
}
//Declaring Rook as subclass
Rook.prototype = new ChessPiece();

/*Creating makeMove() for Rook Object
Checks for valid moves for object, moves obj in board array
then redraws board
*/
Rook.prototype.makeMove = function (name, newX, newY) {
    var piece = this.getCoordinates();
    var tempy = piece.y;
    var tempx = piece.x;

	/*Function validates that the piece you want to capture is on your team
	  and then performs changes in board array */
    Rook.prototype.slide = function (myObj, yOffSet, xOffSet) {

        if (arr[newY][newX] instanceof ChessPiece) {
            if (arr[newY][newX].team !== this.team) {
                arr[piece.y + yOffSet][piece.x] = this;
                arr[tempy][piece.x] = undefined;
                this.setCount();

            }
        } else if (arr[newY][newX] == undefined) {


        } else {

            return false;
        }
    }


	//Rook Moving Down
    if ((piece.y < newY) && (piece.x == newX)) {

        while ((piece.y < newY) && (arr[piece.y + 1][piece.x] == undefined)) {
            piece.y++;
        }

        if (piece.y == newY) {
            if (arr[piece.y][piece.x] == undefined) {
                arr[piece.y][piece.x] = this;
                arr[tempy][piece.x] = undefined;
                this.setCount();
            }
        } else {
            Rook.prototype.slide(this, 1, 0);
        }
    }

		//Rook Moving Up
    if ((piece.y > newY) && (piece.x == newX)) {
   
        while ((piece.y > newY) && (arr[piece.y - 1][piece.x] == undefined)) {
            piece.y--;
        }
        if (piece.y == newY) {
            if (arr[piece.y][piece.x] == undefined) {
                arr[piece.y][piece.x] = this;
                arr[tempy][piece.x] = undefined;
                this.setCount();

            }
        } else {

            Rook.prototype.slide(this, -1, 0);
        }
    }

    //Moving Rook to the Right
    if ((piece.y == newY) && (piece.x < newX)) {
        console.log('moving to the right')

        console.log(arr[piece.y][piece.x + 1], 'piece that needs to be undefined')
        while ((piece.x < newX) && (arr[piece.y][piece.x + 1] == undefined)) {
            piece.x++;
        }

        if (piece.x == newX) {
            if (arr[piece.y][piece.x] == undefined) {
                arr[piece.y][piece.x] = this;
                arr[piece.y][tempx] = undefined;
                this.setCount();

            }
        } else {
            Rook.prototype.slide(this, 0, 1);
        }

    }

    //Moving Rook to the Left
    if ((piece.y == newY) && (piece.x > newX)) {
        console.log('moving to the left')

        console.log(arr[piece.y][piece.x - 1], 'piece that needs to be undefined')
        while ((piece.x > newX) && (arr[piece.y][piece.x - 1] == undefined)) {
            piece.x--;
        }

        if (piece.x == newX) {
            if (arr[piece.y][piece.x] == undefined) {
                arr[piece.y][piece.x] = this;
                arr[piece.y][tempx] = undefined;
                this.setCount();

            }
        } else {
            Rook.prototype.slide(this, 0, -1);
        }
    }

    drawBoard();
    return arr;
}
