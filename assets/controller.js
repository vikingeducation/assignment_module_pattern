var MOLES = MOLES || {};

MOLES.Controller = (function(Model, View) {

  var gameDuration = 60000;
  var appearance, disappearance, gameOn;

  var init = function() {
    View.init({
      startGame: _startGame,
      moleWhacked: _moleWhacked,
    });
  }

  var _startGame = function() {
    gameOver = false;
    View.renderScore(Model.getScore());
    window.setTimeout(_outOfTime, gameDuration);
    _runGame();
  }

  var _outOfTime = function() {
    alert('Out of Time! Game Over.');
    gameOver = true;
    _resetRound();
    Model.reset();
  }

  var _runGame = function() {
    if (!gameOver) {
      appearance = window.setTimeout(_showMole, Model.getRandomInterval());
    }
  }

  var _showMole = function() {
    View.showMole(Model.createMolePosition());
    disappearance = window.setTimeout(function() {
      _resetRound();
      _runGame();
    }, Model.getRandomInterval());
  }

  var _resetRound = function() {
    View.clearBoard();
    clearTimeout(appearance);
    clearTimeout(disappearance);
  }

  var _moleWhacked = function() {
    Model.updateScore();
    View.renderScore(Model.getScore());
    _resetRound();
    _runGame();
  }

  return {
    init: init
  }

})(MOLES.Model, MOLES.View);