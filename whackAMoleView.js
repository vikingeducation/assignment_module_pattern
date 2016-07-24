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

  // view.activateSquare
  activateSquare = function( hexColorCode, index ){
    setPropertyOfElement( "#square-" + index, "background-color", hexColorCode );
    addListenerToSquare( index );
  };

  // view.addListenerToSquare
  addListenerToSquare = function( index ){
    $("#square-" + index).click(function(){
      model.addToScore( 1 );
      resetSquare( index );
      $("#score").text( model.getScore() );
    })
  };

  // view.addSquaresToGameBoard
  addSquaresToGameBoard = function( idOfGameBoard, numberOfSquares, squareClassName ){
  	for(var i = 0; i < numberOfSquares; i++) {
  		$(idOfGameBoard).append("<div class='" + squareClassName + "' id='square-" + i + "'></div>")
  	};
  };

  // view.resetSquare
  resetSquare = function( index ){
    setPropertyOfElement( ("#square-" + index), "background-color", "white");
    $("#square-" + index).off();
  };

  // view.setPropertyOfElement
  setPropertyOfElement = function( element, property, value ){
  	$(element).css( property, value )
  };

  return {
    activateSquare: activateSquare,
  	init: init,
    resetSquare: resetSquare,
    setPropertyOfElement: setPropertyOfElement
  };

})();