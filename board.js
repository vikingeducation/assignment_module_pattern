var WhackAMole = WhackAMole || {};

WhackAMole.board = (function() {
  var height = 4;
  var width = 2;
  var init = function() {
    buildBoard();
  };

  var buildBoard = function() {
    for(var y=0; y<height; y++) {
      for(var x=0;x<width; x++){
        $('#game-board').append("<div class='hole'></div>");
      };
      $('#game-board').append('<br>');
    };
  };

  return {
    init: init
  }
})();

$(document).ready(function() {
  WhackAMole.board.init();
})