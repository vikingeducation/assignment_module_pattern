var WAM = WAM || {};


WAM.util = (function(){
  var rand = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return {
    rand: rand
  };
})();


WAM.playfield = (function($){
  var init = function(){
    $('span').text(WAM.stats.getScore());
  };

  var updateScore = function(score){
    $('span').text(WAM.stats.getScore());
  };

  return {
    init: init,
    updateScore: updateScore
  };
})($);


WAM.moles = (function(util, $){
  var _$moles;

  var init = function(){
    _$moles = $('.mole');
  };  

  var _randMole = function(){
    var mole = $(_$moles[util.rand(0, 8)]);
    while(mole.is(':visible')){
      mole = $(_$moles[util.rand(0, 8)]);
    }
    return mole;
  };

  var _hideMole = function(mole){
    mole.fadeOut();
  };

  var popUpMole = function(){
    var mole = _randMole();
    mole.fadeIn();
    setTimeout(_hideMole(mole), 10000);
  };


  var whackMole = function(mole){
    if (mole.is(':visible')){
      _hideMole(mole);
      return true;
    }
  };

  return {
    init: init,
    popUpMole: popUpMole,
    whackMole: whackMole
  };
})(WAM.util, $);


WAM.stats = (function(){
  var _score = 0;
  
  var getScore = function(){
    return _score;
  };

  var scorePoint = function(){
    return _score += 1;
  };

  return {
    getScore: getScore,
    scorePoint: scorePoint
  };
})();


WAM.main = (function(playfield, moles, stats, util, $){
  var _loopId;

  var startGame = function(){
    _mouseBinding();
    moles.init();
    playfield.init();
    loopID = setInterval(_playLoop, 500);
  };

  var _mouseBinding = function(){
    $('.mole').on('click', function(){
      if (moles.whackMole($(this))){
        _score();
      }
    });
  };

  var _playLoop = function(){
    if (WAM.util.rand(1,6) > 5){
      moles.popUpMole();
    }
  };

  var _score = function(){
    stats.scorePoint();
    playfield.updateScore();
  };

  return {
    startGame: startGame
  };
})(WAM.playfield, WAM.moles, WAM.stats, WAM.util, $);


$( document ).ready(function(){
  WAM.main.startGame();
});