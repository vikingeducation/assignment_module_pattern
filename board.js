var WHACK = WHACK || {};

WHACK.Board = (function() {

  var $board;
  var $scoreboard;

  function init() {
    $board = $('.container');
    $scoreboard = $('.scoreboard')
    $scoreboard.children('#reset-score').click( WHACK.MainModule.reset );

    var numberOfMoles = WHACK.MainModule.getNumberOfMoles();
    for (var i = 0; i < numberOfMoles; i++) {
      _drawMole(i);
    };
  };

  function _drawMole(i) {
    var $mole = $("<div class='mole'></div>");
    $mole.appendTo($board);
  };

  function activate(moleID) {
    $board.children().eq(moleID).addClass('active');
  };

  function deactivate() {
    $board.children().removeClass('active');
  };


  function enableControls() {
    $board.on('click', WHACK.MainModule.userClick )
  };


  function disableControls() {
    $board.off('click');
  };


  function updateScore(newScore) {
    $scoreboard.children('.score').text("Score: " + newScore);
  };

  function updateTimer() {
    $scoreboard.children('.timer').text("Time: " + WHACK.MainModule.getTime() );
  };



  return {
    init: init,
    activate: activate,
    deactivate: deactivate,
    enableControls: enableControls,
    disableControls: disableControls,
    updateScore: updateScore,
    updateTimer: updateTimer
  };

})();