var WAM = WAM || {};

WAM.MainModule = (function(){
  var _interval;

  var _moleHoles = 8;

  //20 second game length
  var _gameTimer = 20;
  var _score = 0;



  var _gameLoop = function(){
    _interval = setInterval(function(){
      _gameTimer--;
        console.log(_gameTimer)
    }, 1000);

    if (_gameTimer === 0) {
      _stopGame();
    }
  };

  var init = function(){
    _gameLoop();
  };

  var _stopGame = function(){
    console.log("game over");
    clearInterval(_interval);
  };



  return {
    init: init
  };

}());