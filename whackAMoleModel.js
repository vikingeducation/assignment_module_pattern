'use_strict;'

var model = (function(){

  var squaresArray = [];
  getSquaresArray = function(){ return squaresArray };

  var gameBoard = {};
  getGameBoard = function(){ return gameBoard };

  var score = 0;
  getScore = function(){ return score };
  addToScore = function( value ){ score += value };

  init = function( gameBoard, gameBoardBorderWidth, numberOfSquares, squaresArray, squareBorderWidth, squareMargin ){
    score = 0;

  	var squareWidth = calculateSquareWidth( squareMargin );

  	setGameBoardProperties( gameBoard,
  							gameBoardBorderWidth, 
  							numberOfSquares, 
  							squareBorderWidth, 
  							squareMargin, 
  							squareWidth );

  	addToSquareConstructorPrototype( squareBorderWidth, squareMargin, squareWidth );

  	createSquares( numberOfSquares, squaresArray );
  };

  addToSquareConstructorPrototype = function( squareBorderWidth, squareMargin, squareWidth ){
  	squareConstructor.prototype.border = squareBorderWidth + "px solid black";
  	squareConstructor.prototype.margin = squareMargin + "px";
  	squareConstructor.prototype.width = squareWidth + "px";
  	squareConstructor.prototype.height = squareWidth + "px";
  };

  calculateSquareWidth = function( squareMargin ){
  	return squareMargin * 6;
  };

  function squareConstructor( hexColorCode ){
  	this.hexColorCode = hexColorCode;
  };

  // model.setGameBoardProperties
  setGameBoardProperties = function( gameBoard, gameBoardBorderWidth, numberOfSquares, squareBorderWidth, squareMargin, squareWidth ){
  	gameBoard.border = gameBoardBorderWidth + "px solid black";
  	gameBoard.height = squareMargin * 2 + squareWidth;
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

  // model.randomNumber
  // Random number from 0 to largestNumber
  randomNumber = function( largestNumber, smallestNumber ){
    var smallest = smallestNumber || 0;
    var number =  Number( (Math.random() * largestNumber).toFixed(0) );
    while (number < smallestNumber) {
      number = Number( (Math.random() * largestNumber).toFixed(0) );
    };
    return number;
  };

  return {
  	init: init,

    getScore: getScore,
    addToScore: addToScore,

  	getGameBoard: getGameBoard,
  	getSquaresArray: getSquaresArray,

    randomNumber: randomNumber
  };

})();