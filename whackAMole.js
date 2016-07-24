'use_strict;'

// Remember the point of this is to practice with modules...

var model = (function(){

  var squaresArray = [];
  getSquaresArray = function(){ return squaresArray };

  var gameBoard = {};
  getGameBoard = function(){ return gameBoard };

  init = function( gameBoard, gameBoardBorderWidth, numberOfSquares, squaresArray, squareBorderWidth, squareMargin, squareWidth ){
  	setGameBoardProperties( gameBoard,
  							gameBoardBorderWidth, 
  							numberOfSquares, 
  							squareBorderWidth, 
  							squareMargin, 
  							squareWidth );

  	createSquares( numberOfSquares, squaresArray );
  };

  function squareConstructor( hexColorCode ){
  	this.hexColorCode = hexColorCode;
  };

  // model.setGameBoardProperties
  setGameBoardProperties = function( gameBoard, gameBoardBorderWidth, numberOfSquares, squareBorderWidth, squareMargin, squareWidth ){
  	gameBoard.width = numberOfSquares * (squareWidth + 2 * squareMargin + 2 * squareBorderWidth) + 2 * gameBoardBorderWidth;
  };

  // model.createSquares
  createSquares = function( numberOfSquares, squaresArray ){
  	for(var i = 0; i < numberOfSquares; i++){
  		var randomHexColorCode = getRandomHexColorCode();
  		var newSquare = new squareConstructor( randomHexColorCode );
  		squaresArray.push( newSquare );
  	};
  };

  // model.getRandomHexColorCode
  getRandomHexColorCode = function() {
    var letters = '0123456789ABCDEF';
    var hexColorCode = '#';
    for (var i = 0; i < 6; i++ ) {
        hexColorCode += letters[Math.floor(Math.random() * 16)];
    }
    return hexColorCode;
  };

  return {
  	init: init,

  	getGameBoard: getGameBoard,

  	getSquaresArray: getSquaresArray,
  };

})();

var view = (function(){
  init = function( idOfGameBoard, numberOfSquares, squareClassName, widthOfGameBoard ){
  	addSquaresToGameBoard( idOfGameBoard, numberOfSquares, squareClassName );
  	setWidthOfGameBoard( idOfGameBoard, widthOfGameBoard );
  };

  // view.addSquaresToGameBoard
  addSquaresToGameBoard = function( idOfGameBoard, numberOfSquares, squareClassName ){
  	for(var i = 0; i < numberOfSquares; i++) {
  		$("#" + idOfGameBoard).append("<div class='" + squareClassName + "' id='square-" + i + "'></div>")
  	};
  };

  // view.setBackgroundColor
  setBackgroundColor = function( hexColorCode, $object ){
  	$object.css("background-color", hexColorCode);
  };

  // view.setWidthOfGameBoard
  setWidthOfGameBoard = function( idOfGameBoard, widthOfGameBoard ){
  	$("#" + idOfGameBoard).width( widthOfGameBoard );
  };

  return {
  	init: init,
  };

})();

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
  				squareMargin, 
  				squareWidth );

  	var gameBoardWidth = gameBoard.width;

  	view.init( idOfGameBoard, numberOfSquares, squareClassName, gameBoardWidth );

  	startGame();
  },

  // controller.starGame
  startGame = function(  ){
  	gameInterval = setInterval(
  	  function(){

  	  }
  	, 3000)
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
  var squareWidth = 90;
  controller.init( gameBoard, 
  				   gameBoardBorderWidth, 
  				   numberOfSquares, 
  				   squaresArray, 
  				   squareBorderWidth, 
  				   squareMargin, 
  				   squareWidth );
});