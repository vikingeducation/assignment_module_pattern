var MOLE = MOLE || {};

MOLE.Controller = (function() {

  var init = function() {
    MOLE.View.init(_addPoint);

    setInterval( function() {
      MOLE.View.reset();
      _frame();
    }, 1000);
  }

  var _addPoint = function() {
    console.log('callback called');
    MOLE.Model.addPoint();
  }

  var _frame = function() {
    var mole = MOLE.Model.getMole();
    var score = MOLE.Model.getScore();
    MOLE.View.render(mole, score);
  }

  return {
    init: init
  }

})();

MOLE.Model = (function($) {

  var score = 0;

  var addPoint = function(){ score++ };

  var getMole = function() {
    // randomly picks a mole
    var i = Math.floor(Math.random() * 8)
    return $('.mole')[i];
  }

  var getScore = function() {
    return score;
  }

  return {
    getMole: getMole,
    getScore: getScore,
    addPoint: addPoint
  }

})($);

MOLE.View = (function() {

  var _addPoint;

  var init = function(callback){
    _addPoint = callback;
   setUpListener();
  }

  var reset = function() { $('.lit').removeClass('lit') };

  var setUpListener = function() {
    $( '.mole' ).click( function(e) {
      if ($(e.target).hasClass('lit')) {
        _addPoint();
        reset();
      }
    } );
  }

  var _lightMole = function(mole) {
    $(mole).addClass('lit');
  }

  var _setScore = function(score) { $('#score').text('Score: ' + score) };

  var render = function(mole, score) {
    _lightMole(mole);
    _setScore(score);
  }

  return {
    init: init,
    reset: reset,
    render: render
  }

})();

$( document ).ready( function() { MOLE.Controller.init() });

