//CREATING QUEEN OBJECTS
function Queen(name) {
    this.name = name;
}
//Declaring Queen as subclass
Queen.prototype = new ChessPiece();

/*Creating makeMove() for Queen Object
Checks for valid moves for object, moves obj in board array
then redraws board

TODO - Return Inner function from Rook & Bishop and then use call()
to pass functionality to Queen
*/
Queen.prototype.makeMove = function (name, newX, newY) {

    var piece = this.getCoordinates();
    var tempy = piece.y;
    var tempx = piece.x;
    var absX = Math.abs(newX - piece.x);
    var absY = Math.abs(newY - piece.y);

    /*Function validates that the piece you want to capture is on your team
and then performs changes in board array */
    Queen.prototype.slide = function (myObj, yOffSet, xOffSet) {


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

        while ((piece.x < newX) && (arr[piece.y + 1][piece.x + 1] == undefined)) {

            piece.x++;
            piece.y++;
        }
        Queen.prototype.slide(this, 1, 1);
    }

    //NE
    if ((piece.x > newX) && (piece.y > newY) && (absX == absY)) {
        console.log("I'm going diagonally");
        while ((piece.x > newX) && (arr[piece.y - 1][piece.x - 1] == undefined)) {
            piece.x--;
            piece.y--;
        }
        Queen.prototype.slide(this, -1, -1);
    }
    //SW
    if ((piece.x > newX) && (piece.y < newY) && (absX == absY)) {

        while ((piece.x > newX) && (arr[piece.y + 1][piece.x - 1] == undefined)) {

            piece.x--;
            piece.y++;
        }
        Queen.prototype.slide(this, 1, -1);
    }

    //NW
    if ((piece.x < newX) && (piece.y > newY) && (absX == absY)) {

        while ((piece.x < newX) && (arr[piece.y - 1][piece.x + 1] == undefined)) {

            piece.x++;
            piece.y--;
        }
        this.slide(this, -1, 1);
    }


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


            if (arr[newY][newX] instanceof ChessPiece) {
                if (arr[newY][newX].team !== this.team) {
                    arr[piece.y + 1][piece.x] = this;
                    arr[tempy][piece.x] = undefined;
                    this.setCount();



                }
            } else if (arr[newY][newX] == undefined) {
                console.log("not valid move");

            } else {
                console.log("not valid move");
            }
        }

    }


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

            if (arr[newY][newX] instanceof ChessPiece) {
                if (arr[newY][newX].team !== this.team) {
                    arr[piece.y - 1][piece.x] = this;
                    arr[tempy][piece.x] = undefined;
                    this.setCount();



                }
            } else if (arr[newY][newX] == undefined) {
                console.log("not valid move");

            } else {
                console.log("not valid move");
            }
        }
    }

    //Moving Queen to the Right
    if ((piece.y == newY) && (piece.x < newX)) {

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

            if (arr[newY][newX] instanceof ChessPiece) {
                if (arr[newY][newX].team !== this.team) {
                    arr[piece.y][piece.x + 1] = this;
                    arr[piece.y][tempx] = undefined;
                    this.setCount();

                }
            } else if (arr[newY][newX] == undefined) {
                console.log("not valid move");

            } else {
                console.log("not valid move");
            }
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

            if (arr[newY][newX] instanceof ChessPiece) {
                if (arr[newY][newX].team !== this.team) {
                    arr[piece.y][piece.x - 1] = this;
                    arr[piece.y][tempx] = undefined;
                    this.setCount();

                }
            } else if (arr[newY][newX] == undefined) {
                console.log("not valid move");

            } else {
                console.log("not valid move");
            }
        }
    }
    
	drawBoard();
    return arr;

}