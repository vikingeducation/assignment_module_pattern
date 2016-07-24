'use_strict;'

// Remember the point of this is to practice with modules...

var controller = (function(model, view, $){
  init = function( gameBoard,
  				   gameBoardBorderWidth, 
  				   numberOfSquares,
  				   squaresArray,
  				   squareBorderWidth, 
  				   squareMargin, 
  				   squareWidth, 
  				   idOfGameBoard, 
  				   numberOfSquares, 
  				   squareClassName ){
  	var idOfGameBoard = idOfGameBoard || 'game-board';
  	var numberOfSquares = numberOfSquares || 8;
  	var squareClassName = squareClassName || 'square';

  	model.init( gameBoard,
  				gameBoardBorderWidth, 
  				numberOfSquares, 
  				squaresArray,
  				squareBorderWidth, 
  				squareMargin );

  	var gameBoardBorder = gameBoard.border;
  	var gameBoardHeight = gameBoard.height;
  	var gameBoardWidth = gameBoard.width;

  	var squareBorder = squaresArray[0].border;
  	var squareMargin = squaresArray[0].margin;
  	var squareSide = squaresArray[0].height;

  	view.init( idOfGameBoard, 
  			   gameBoardBorder, 
  			   gameBoardHeight, 
  			   numberOfSquares, 
  			   squareBorder, 
  			   squareMargin,
  			   squareSide,
  			   squareClassName, 
  			   gameBoardWidth );

  	startGame( squaresArray );
  },

  // controller.starGame
  startGame = function( squaresArray ){
  	var counter = 0;
  	var index = null;
  	var resetSquareTime = 0;
  	gameInterval = setInterval(
  	  function(){
  	  	counter++;
  	  	if (counter > resetSquareTime){
  	  		// I want to reset any square was previously on...
  	  		view.resetSquare( index );

  	  		// Then I want to get a new random square to highlight and put a listener on.
  	  		index = model.randomNumber( squaresArray.length - 1 );
  	  		var squareToColor = squaresArray[index];

  	  		// put color on that square and listener
  	  		view.activateSquare( squareToColor.hexColorCode, index );

  	  		// I want to set a new time for the square to be colored for.
  	  		resetSquareTime = counter + model.randomNumber( 20, 5 );
  	  	};
  	  }
  	, 100)
  }

  return {
  	init: init,
  }

})(model, view, $);

$(document).ready(function(){
  var gameBoard = model.getGameBoard();
  var squaresArray = model.getSquaresArray();
  var gameBoardBorderWidth = 1;
  var numberOfSquares = 8;
  var squareBorderWidth = 1;
  var squareMargin = 15;
  controller.init( gameBoard, 
  				   gameBoardBorderWidth, 
  				   numberOfSquares, 
  				   squaresArray, 
  				   squareBorderWidth, 
  				   squareMargin );
});