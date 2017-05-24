var MOLES = MOLES || {};

MOLES.Controller = (function(Model, View) {

  var _gameDuration = 60000;
  var_appearance, _disappearance;

  var init = function() {
    View.init({
      startGame: _startGame,
      moleWhacked: _moleWhacked,
    });
  }

  var _startGame = function() {
    _gameOver = false;
    View.renderScore(Model.getScore());
    window.setTimeout(_outOfTime, gameDuration);
    _runGame();
  }

  var _outOfTime = function() {
    alert('Out of Time! Game Over.');
    _gameOver = true;
    _resetRound();
    Model.reset();
  }

  var _runGame = function() {
    if (!_gameOver) {
      _appearance = window.setTimeout(_showMole, Model.getRandomInterval());
    }
  }

  var _showMole = function() {
    View.showMole(Model.createMolePosition());
    _disappearance = window.setTimeout(function() {
      _resetRound();
      _runGame();
    }, Model.getRandomInterval());
  }

  var _resetRound = function() {
    View.clearBoard();
    clearTimeout(appearance);
    clearTimeout(_disappearance);
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