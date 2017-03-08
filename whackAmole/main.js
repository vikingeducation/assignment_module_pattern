var WAM = WAM || {};

WAM.Main = (function(){
  var _interval,
      moleCount = 8,
      score = 0,
      _allMoles = [],
      _gameTimer = 20, //20 second game length
      _gameTimerElement = $("#time-left"),
      _scoreElement = $("#score"),
      _gameBoardElement = $('#game-board');


  var _stopGame = function(){
    console.log("game over");
    $(".mole-hole").removeClass(".active-mole")
    clearInterval(_interval);
  };

  var _renderPoints = function(domElement){
    domElement.text(score);
  }

  var _renderTimeLeft = function(domElement){
    domElement.text(_gameTimer);
  }

  var _renderAll = function(){
    WAM.Mole.updateMoles();
    _renderTimeLeft(_gameTimerElement);

    if (_gameTimer === 0) {
      _stopGame();
    } else {
      _gameTimer--;
    }

    _renderPoints(_scoreElement);
  };

  var _play = function(){
    _interval = setInterval(function(){
      _renderAll();
    }, 1000);
  };

  var init = function(){
    WAM.Mole.init(moleCount, _gameBoardElement);
    _play();
  };

  var updateScore = function(points){
    score += points;
  };

  return {
    init: init, updateScore: updateScore, moleCount: moleCount
  };

}());