var  Game = Game || {};

Game.BoardModule = (function(){

  var $board;
  
  function initBoard(){
    this.$board = $('.game-board');

    for(var i = 0; i<8; i++ ){
      $square = $('<div class="square"><span class="glyphicon glyphicon-minus"></span><div>');
      this.$board.append($square);
    }
  }

  return{
    $board: $board,
    initBoard: initBoard
  };

})();
Game.BoardModule.initBoard();