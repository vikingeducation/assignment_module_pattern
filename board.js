var MOLE = MOLE || {}

MOLE.Board = (function(){

  var height = 2;
  var width = 4;

  var getHeight = function(){
    return height;
  };

  var getWidth = function(){
    return width;
  };

  var generateGrid = function(){
    var counter = 0;
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        var $block = $('<div id='+counter+' class="grids">dfsdf</div>');
        $('#board').append($block);
        counter ++;
      }
    }
  }


  return {
    getHeight: getHeight,
    getWidth: getWidth,
    generateGrid: generateGrid,
  }
} )();