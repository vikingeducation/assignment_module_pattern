'use_strict;'

var view = (function(){
  init = function( idOfGameBoard, gameBoardBorder, heightOfGameBoard, numberOfSquares, squareBorder, squareMargin, squareSide, squareClassName, widthOfGameBoard ){
  	var idOfGameBoardWithHash = "#" + idOfGameBoard;
  	var squareClassWithFullStop = "." + squareClassName;

  	addSquaresToGameBoard( idOfGameBoardWithHash, numberOfSquares, squareClassName );

  	setPropertyOfElement( idOfGameBoardWithHash, "border", gameBoardBorder);
  	setPropertyOfElement( idOfGameBoardWithHash, "height", heightOfGameBoard);
  	setPropertyOfElement( idOfGameBoardWithHash, "width", widthOfGameBoard);

  	setPropertyOfElement( squareClassWithFullStop, "border", squareBorder);
  	setPropertyOfElement( squareClassWithFullStop, "margin", squareMargin);
  	setPropertyOfElement( squareClassWithFullStop, "height", squareSide);
  	setPropertyOfElement( squareClassWithFullStop, "width", squareSide);
  };

  // view.addSquaresToGameBoard
  addSquaresToGameBoard = function( idOfGameBoard, numberOfSquares, squareClassName ){
  	for(var i = 0; i < numberOfSquares; i++) {
  		$(idOfGameBoard).append("<div class='" + squareClassName + "' id='square-" + i + "'></div>")
  	};
  };

  // view.setPropertyOfElement
  setPropertyOfElement = function( element, property, value ){
  	$(element).css( property, value )
  };

  return {
  	init: init,
  };

})();