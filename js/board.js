
//12x12 Array for  Board Representation
/*TODO - Create board dynamically
  NOTES - Initially went with 12x12 Grid for board but since drawboard accounts for squares out of bounds,
  I can use 8 x 8 and not worry about invalid moves
*/
var arr = [
				 [99,99,99,99,99,99,99,99,99,99,99,99],  
				 [99,99,99,99,99,99,99,99,99,99,99,99], 
				 [99,99,wrook, wknight, wbishop,wqueen, wking, wbishop1,  wknight1, wrook1,99,99], 
				 [99,99,wpawn1, wpawn2, wpawn3, wpawn4 ,  wpawn5, wpawn6 ,  wpawn7, wpawn8,99,99], 
				 [99,99,undefined, undefined,   undefined,   undefined,   undefined,  undefined,    undefined,    undefined,99,99], 
				 [99,99,undefined, undefined,   undefined,   undefined,   undefined,  undefined,    undefined,    undefined,99,99], 
				 [99,99,undefined, undefined,   undefined,   undefined,   undefined,  undefined,    undefined,    undefined,99,99], 
				 [99,99,undefined, undefined,   undefined,   undefined,   undefined,  undefined,    undefined,    undefined,99,99], 
				 [99,99,bpawn1, bpawn2,  bpawn3, bpawn4,   bpawn5,  bpawn6,    bpawn7, bpawn8,99,99], 
				 [99,99,brook, bknight, bbishop, bking,  bqueen,  bbishop1,  bknight1,  brook1,99,99], 
				 [99,99,99,99,99,99,99,99,99,99,99,99], 
				 [99,99,99,99,99,99,99,99,99,99,99,99]
			]
 
 
  
  var firstMove = 0; //Only true once for setting pieces to proper color
 //Board Creation Functionality
 function drawBoard() {
     $(function () {

         var boardPiece = "";
         var tColor = "";
         var squareCount = 0;
         $('body').empty();
         for (i = 0; i < arr.length; i++) {
             for (j = 0; j < arr[i].length; j++) {
                 //sets cell color
                 if ((parseInt(squareCount / 12)) % 2 == 0) {
                     if (j % 2 == 0) {
                         var squareColor = "blackCell";
                     } else {
                         var squareColor = "whiteCell";
                     }

                 } else {
                     if (j % 2 == 0) {
                         var squareColor = "whiteCell";
                     } else {
                         var squareColor = "blackCell";
                     }
                 }

					//Sets first two valid rows of objects' team property to white
                 if ((i == 2 || i == 3) && (arr[i][j] != undefined) && firstMove == 0) {
                     arr[i][j].team = "white"
                 }

                 if ((arr[i][j] instanceof ChessPiece) || (arr[i][j] !== 99)) {
                     //Checking object for color, then prepending name with letter "b" if black
                     if (arr[i][j] != undefined) {
                         if (arr[i][j].team == 'black') {
                             tColor = "b";
                         }
                         if (arr[i][j].team == 'white') {
                             tColor = "w";
                         }

                     }

                     var ctext = $('<div class="name">' + arr[i][j] + '</div>');
                     if (arr[i][j] instanceof Pawn) {

                         var chessImage = tColor + 'pawnImage';
                     } else if (arr[i][j] instanceof Knight) {
                         //	console.log('should be white pawn',$(ctext).text());
                         var chessImage = tColor + 'knightImage';
                     } else if (arr[i][j] instanceof Bishop) {
                         //		console.log('should be white pawn',$(ctext).text());
                         var chessImage = tColor + 'bishopImage';
                     } else if (arr[i][j] instanceof King) {
                         //		console.log('should be white pawn',$(ctext).text());
                         var chessImage = tColor + 'kingImage';
                     } else if (arr[i][j] instanceof Queen) {
                         //		console.log('should be white pawn',$(ctext).text());
                         var chessImage = tColor + 'queenImage';
                     } else if (arr[i][j] instanceof Rook) {
                         //console.log('should be white pawn',$(ctext).text());
                         var chessImage = tColor + 'rookImage';
                     } else {
                         //	console.log('should be white pawn',$(ctext).text());
                         var chessImage = '';
                     }
					//Creates Square Elements for objs and add classes for manipulation
                     var cell = $('<div class="' + chessImage + ' ' + boardPiece + ' ' + squareColor + '">' + arr[i][j] + '</div><span class="ycoord">' + i + '</span><span class="xcoord">' + j + '</span>')

					//Adds to body in DOM
                     $('body').append(cell);
                 }

                 squareCount++; 
             }
         }
         firstMove++; //FirstMove incremented after board set

         $('body').wrapInner('<div id="mainContainer"></div>');

         /*Board Styling
		  NOTE - Didn't know how to set CSS3 box-shawdow in JS
		  so I created some CSS.  check in Styles.css
		 */
         $('div div').css({

             "border": "1px solid #fffaaa",
             "height": "80px",
             "width": "80px",
             "padding": "12px",
             "float": "left",
             "text-indent": '-999px',
             "overflow": "hidden"
         });
         $('div div').css('text-indent', '-999px');
         $('#mainContainer').css({
             "background-color": "#444",
             'width': '848px',
             'margin': '0 auto',
             'border': '3px solid brown',
             'box-shawdow': '3px 3px 3px',
             'overflow': 'hidden'

         });
         $('div span').hide();
		 
		
	
		
		/*Introduction to Game Modal*/
		var instructionModal = {
			
			showModal: function () {
					
				if (firstMove == true) {
					var overlay = $('<div id="overlay"> </div>');
					var renderedText = this.renderHTML();
					renderedText.appendTo(overlay);
					overlay.appendTo($('body'));
				}
			},

			closeModal: function () {
				$('.modalContent').find('button').on('click',document,function(){
					$('#overlay').hide();
				});

			},
			renderHTML : function(){
				return $('<div class=\'modalContent\'>'+
						'<div>Welcome to AdeChess!</div>'+
					   '<div>White Piece Goes First</div>'+
					    '<button class=\'close\'>Click Here To Play</button>'+
						'<a href=\'http://www.smartade.com/adechess.rar\' class=\'close\'>download rar</a>'+
					   '</div>'
					  );
			}
		}
		instructionModal.showModal();
		instructionModal.closeModal();		 

     });
 }