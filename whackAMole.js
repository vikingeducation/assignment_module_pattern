'use_strict;'

var controller = {
  init: function( model, view, idOfGameBoard, numberOfSquares, squareClassName ){
  	model.init();
  	view.init( idOfGameBoard, numberOfSquares );
  }
};

var model = {
  init: function(){

  },

  // model.getRandomHexColorCode
  getRandomHexColorCode: function() {
    var letters = '0123456789ABCDEF';
    var hexColorCode = '#';
    for (var i = 0; i < 6; i++ ) {
        hexColorCode += letters[Math.floor(Math.random() * 16)];
    }
    return hexColorCode;
  },
};

var view = {
  init: function( idOfGameBoard, numberOfSquares, squareClassName ){
  	var idOfGameBoard = idOfGameBoard || 'game-board';
  	var numberOfSquares = numberOfSquares || 8;
  	var squareClassName = squareClassName || 'square';
  	view.addSquaresToGameBoard( idOfGameBoard, numberOfSquares, squareClassName );
  	view.setWidthOfGameBoard( idOfGameBoard, numberOfSquares, squareClassName );
  	view.assignColorsToSquares(squareClassName);
  }, 

  // view.addSquaresToGameBoard
  addSquaresToGameBoard: function( idOfGameBoard, numberOfSquares, squareClassName ){
  	for(var i = 0; i < numberOfSquares; i++) {
  		$("#" + idOfGameBoard).append("<div class='" + squareClassName + "' id='square-" + i + "'></div>")
  	};
  },

  // view.assignColorToSquare
  assignColorToSquare: function(hexColorCode, $square){
  	$square.css("background-color", hexColorCode);
  },

  // view.assignColorsToSquares
  assignColorsToSquares: function(squareClassName){
  	var squares = $("." + squareClassName);
  	$(squares).each( function(){
  		var randomHexColorCode = model.getRandomHexColorCode();
  		view.assignColorToSquare( randomHexColorCode, $("#" + this.id) );
  	} );
  },

  // view.setWidthOfGameBoard
  setWidthOfGameBoard: function( idOfGameBoard, numberOfSquares, squareClassName ){
  	var squareClassName = "." + squareClassName;
  	var widthOfGameBoardBorder = parseInt($("#game-board").css("border"));
  	var widthOfSquareBorder = parseInt($(squareClassName).css("border"));
  	var widthOfSquare = $(squareClassName).width();
  	var marginOfSquare = parseInt($(squareClassName).css("margin"));

  	var widthOfGameBoard = numberOfSquares * widthOfSquare + numberOfSquares * 2 * marginOfSquare + 2 * widthOfGameBoardBorder + numberOfSquares * 2 * widthOfSquareBorder;

  	$("#" + idOfGameBoard).css("width", widthOfGameBoard);
  }
};

$(document).ready(function(){
  controller.init( model, view );
});