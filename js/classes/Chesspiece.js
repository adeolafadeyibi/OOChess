/*ChessPiece Constructor contains all methods and properties that are common
to all Chesspieces
*/
function ChessPiece(name) {
    this.name = name,
    this.x,
    this.y,
    this.team = 'black',
    this.moveArray = [],

    /*Gets the coordinates of Chesspiece objects on board*/
    this.getCoordinates = function (name) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < 12; j++) {
                if (arr[i][j] == this) {

                    this.x = j;
                    this.y = i;
                    return this;
                }
            }
        }
    },
    /*Increments Count --This sets turn to opponent once incremented*/
    this.setCount = function () {
        return moveCount++;
    },

    /*Checks whether piece that was just moved has oppents King in Check State
	  TODO - Fix for all pieces
	  Notes - Currently only working for Knight Object
	*/
    this.kindaLegal = function () {
        var currObj = this;
        permX = this.x;
        permY = this.y;
        var teamColor = this.team;
        var enemyKing;
        var moveObj = {};

        if (teamColor == "white") {
            enemyKingX = $('.bkingImage').next('span').next('span').text();
            enemyKingY = $('.bkingImage').next('span').eq(0).text();
        } else {
            enemyKingX = $('.wkingImage').next('span').next('span').text();
            enemyKingY = $('.wkingImage').next('span').eq(0).text();
        }

        enemyKing = arr[enemyKingY][enemyKingX];

        permX = currObj.x;
        permY = currObj.y;

        /*Checks to see whether the next move of the object that was just moved
		  will capture King.
		  
		  If false, the coordinates are pushed to moveArray so we can keep track
		  of the coordinates of where the piece is coming from
		  
		  If true, Kings coordinates are captured
		*/
        if (currObj.makeMove(this.name, enemyKingX, enemyKingY) == false) {
            moveObj = {
                x: permX,
                y: permY
            }
            this.moveArray.push(moveObj);
        } else {
            moveObj = {
                x: permX,
                y: permY
            }
            kingsY = this.y;
            kingsX = this.x;
            undoMove();
        }
        /*
			 Undoes the capturing of King which was done when kindaLegal() condition was true,
			 then alerts check and updates count so correct player can make countermove
		*/
        function undoMove() {

            arr[kingsY][kingsX] = enemyKing; //pushed King to properspot
            arr[permY][permX] = currObj; //pushed Obj to properspot
            drawBoard();
            moveCount++;
            alert("Check");
        }
    },

    this.toString = function () {
        return this.name;
    }
}
