var moveCount = 0; 

$(document).ready(function () {
    drawBoard();

    //Checks is value passed is even and returns boolean
    var isEven = function (someNumber) {
        return (someNumber % 2 == 0) ? true : false;
    }

    var count;
    var pieceName;
    var pn;
    var teamType;
    $(document).on('click', 'div', function (e) {
        //Set this to context to maintain scope 
        var context = this;
        e.stopPropagation();

        //Sets players turn based on moveCount 
        if (isEven(moveCount)) {
            playerTurn = "w";

        } else {
            playerTurn = "b";
        }
        /*Determing whose turn it is and then firing move
          if conditions are met*/
        if (pieceName != "undefined" && count != 1) {

            var classN = $(context).attr('class');
            teamType = classN.charAt(0);

            if (teamType == playerTurn) {

                pieceName = $(context).text();
                pn = pieceName;
                $(context).addClass("fromClass");
                $(context).removeClass("toClass");
                count = 1;
                pn = pieceName;
            }
        } else {

            $(context).addClass("toClass");
            $(context).removeClass("fromClass");
            count = 0;

            //Grabbing x and y coord from DOM
            var ycoord = $(context).next('span').eq(0).text();
            var xcoord = $(context).next('span').next('span').text();

            //Executing MakeMove based on the name of the object
            window[pieceName].makeMove(pieceName, xcoord, ycoord);
        }
    });
	
	
	
}); 