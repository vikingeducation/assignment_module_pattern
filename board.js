var WhackAMole = WhackAMole || {};

WhackAMole.board = (function() {
  var height = 4;
  var width = 2;

  var init = function() {
    buildBoard();
  };

  var buildBoard = function() {
    console.log('board');
    for(var y=0; y<height; y++) {
      for(var x=0;x<width; x++){
        $('#game-board').append('<div class="hole" data-x='+ x +' data-y='+ y +' ></div>');
      };
      $('#game-board').append('<br>');
    };
  };

  return {
    init: init
  }
})();

