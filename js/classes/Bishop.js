//CREATING BISHOP OBJECTS
function Bishop(name) {
    this.name = name;
}
//Declaring Rook as subclass
Bishop.prototype = new ChessPiece();

/*Creating makeMove() for Bishop Object
Checks for valid moves for object, moves obj in board array
then redraws board*/
Bishop.prototype.makeMove = function (name, newX, newY) {
    console.log("Bishop getcoordinates value", this.name);
    var piece = this.getCoordinates();
    var tempy = piece.y;
    var tempx = piece.x;
    var absX = Math.abs(newX - piece.x);
    var absY = Math.abs(newY - piece.y);

    //Function for caputure and obj placement in array
    Bishop.prototype.slide = function (myObj, yOffSet, xOffSet) {
        if (piece.x == newX && piece.y == newY) {
            if (arr[piece.y][piece.x] == undefined) {
                console.log("I'm going until value is undefined", piece.y, piece.x);
                arr[piece.y][piece.x] = myObj;
                arr[tempy][tempx] = undefined;
                myObj.setCount();
            }
        } else {
            console.log("can I get an Else?");
            if (arr[newY][newX] instanceof ChessPiece) {
                if (arr[newY][newX].team !== myObj.team) {
                    arr[piece.y + yOffSet][piece.x + xOffSet] = myObj;
                    arr[tempy][tempx] = undefined;
                    myObj.setCount();

                }
            } else if (arr[newY][newX] == undefined) {
                console.log("not valid move");

            } else {
                console.log("not valid move");
            }
        }
    }

    //Moving SE
    if ((piece.x < newX) && (piece.y < newY) && (absX == absY)) {
        console.log("I'm going diagonally SE");
        while ((piece.x < newX) && (arr[piece.y + 1][piece.x + 1] == undefined)) {
            console.log("I'm going until value is undefined", piece.y, piece.x);
            piece.x++;
            piece.y++;
        }
        Bishop.prototype.slide(this, 1, 1);
    }

    //NE
    if ((piece.x > newX) && (piece.y > newY) && (absX == absY)) {
        console.log("I'm going diagonally");
        while ((piece.x > newX) && (arr[piece.y - 1][piece.x - 1] == undefined)) {
            piece.x--;
            piece.y--;
        }
        Bishop.prototype.slide(this, -1, -1);
    }
    //SW
    if ((piece.x > newX) && (piece.y < newY) && (absX == absY)) {
        console.log("I'm going diagonally SW");
        while ((piece.x > newX) && (arr[piece.y + 1][piece.x - 1] == undefined)) {
            console.log("I'm going until value is undefined");
            piece.x--;
            piece.y++;
        }
        Bishop.prototype.slide(this, 1, -1);
    }

    //NW
    if ((piece.x < newX) && (piece.y > newY) && (absX == absY)) {
        console.log("I'm going diagonally");
        while ((piece.x < newX) && (arr[piece.y - 1][piece.x + 1] == undefined)) {
            console.log("I'm going until value is undefined");
            piece.x++;
            piece.y--;
        }
        this.slide(this, -1, 1);
    }


    drawBoard();
    return arr;

}