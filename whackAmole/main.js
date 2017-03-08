var WAM = WAM || {};

WAM.Main = (function($){
  var _interval,
  _moleHoles = 8,
  _score = 0,
  _allMoles = [],
  _gameTimer = 20; //20 second game length


  var _render = function(){
    WAM.Mole.updateMoles();
    if (_gameTimer === 0) {
      _stopGame();
    } else {
      _gameTimer--;
    }
  };


  var init = function(){
    WAM.Mole.init();
    _render();
    // _gameLoop();
  };

  var _stopGame = function(){
    console.log("game over");
    clearInterval(_interval);
  };

  var _gameLoop = function(){
    _interval = setInterval(function(){
      _render();
    }, 1000);
  };

  return {
    init: init
  };

}());