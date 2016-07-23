'use_strict;'

var controller = {
  init: function( model, view, idOfGameBoard, numberOfSquares ){
  	model.init();
  	view.init( idOfGameBoard, numberOfSquares );
  }
};

var model = {
  init: function(){

  }
};

var view = {
  init: function( idOfGameBoard, numberOfSquares ){
  	var idOfGameBoard = idOfGameBoard || 'game-board';
  	var numberOfSquares = numberOfSquares || 8;
  	view.addSquaresToGameBoard( idOfGameBoard, numberOfSquares );
  	view.setWidthOfGameBoard( idOfGameBoard, numberOfSquares );
  }, 

  // view.addSquaresToGameBoard
  addSquaresToGameBoard: function( idOfGameBoard, numberOfSquares ){
  	for(var i = 0; i < numberOfSquares; i++) {
  		$("#" + idOfGameBoard).append("<div class='square' id='square-" + i + "'></div>")
  	};
  },

  // view.setWidthOfGameBoard
  setWidthOfGameBoard: function( idOfGameBoard, numberOfSquares ){
  	var widthOfGameBoardBorder = parseInt($("#game-board").css("border"));
  	var widthOfSquareBorder = parseInt($(".square").css("border"));
  	var widthOfSquare = $(".square").width();
  	var marginOfSquare = parseInt($(".square").css("margin"));
  	var widthOfGameBoard = numberOfSquares * widthOfSquare + numberOfSquares * 2 * marginOfSquare + 2 * widthOfGameBoardBorder + numberOfSquares * 2 * widthOfSquareBorder;
  	$("#" + idOfGameBoard).css("width", widthOfGameBoard);
  }
};

$(document).ready(function(){
  controller.init( model, view );
});