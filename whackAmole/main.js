var WAM = WAM || {};

WAM.Main = (function(){
  console.log(WAM.Mole)
  var _interval,
  _moleHoles = 8,
  _score = 0,
  _allMoles = [],
  _gameTimer = 20; //20 second game length


  // var _buildMoles = function()}{}



  var _gameLoop = function(){
    _interval = setInterval(function(){
      _gameTimer--;
        // console.log(_gameTimer)
    }, 1000);

    if (_gameTimer === 0) {
      _stopGame();
    }
  };

  var init = function(){
    WAM.Mole.init();
    // _gameLoop();
  };

  var _stopGame = function(){
    console.log("game over");
    clearInterval(_interval);
  };



  return {
    init: init
  };

}());