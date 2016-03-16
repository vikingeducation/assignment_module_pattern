var MOLE = MOLE || {}




MOLE.Game = (function(board, mole) {

  var init = function() {
    var b = board;
    b.generateGrid();
    clickListener();
    showMole();
  }


  var showMole = function() {
    var i;
    var randTime = function() {
      return Math.floor(Math.random() * 500) + 200
    }
    clearInterval(i);
    i = setInterval(showThenHide, randTime())
  }


  var showThenHide = function() {
    mole.hide();
    mole.show();
  }


  var clickListener = function() {
    $('#board').on("click", '.lightup', function() {
      $('.lightup').addClass('correct');
      checkWin();
    })

  }

  var checkWin = function() {
    if ($('.correct').length == 8) {
      var newGame = confirm("You win!!!!");
      console.log(newGame)
      clearInterval(showMole());
    }

    if (newGame) {
      startNewGame();
    }
  }

  var startNewGame = function() {
    board.clearBoard();
    init();
  }


  return {
    init: init
  }


})(MOLE.Board, MOLE.Mole);