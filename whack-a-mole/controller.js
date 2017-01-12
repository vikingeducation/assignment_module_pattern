'use strict';

var MOLE = MOLE || {};

MOLE.Controller = (function(View, Game) {

  var init = function() {
    View.init();
    Game.init();
    setInterval(gameLoop, 1000)
    // setInterval(gameLoop, Math.random() * 3000 + 1000)
  };

  var updateMole = function(id) {
    console.log('in update')
    Game.removeMole(id);
    View.clearMole(id);
  }
  
  var gameLoop = function() {
    console.log('looping')
    var currentMole = Game.addMole();
    if (currentMole) {
      View.renderMole(currentMole.id);
      setTimeout(function() {
        updateMole(currentMole.id)
      }, 5000);
    }
  }

  return {
    init: init
  };

})(MOLE.View, MOLE.Game);



$(function() {
  MOLE.Controller.init();
});

// setInterval(moleAppearance, random 3-7 sec)
//
// moleAppearance
//   currentMole = createMole (constructor call)
//   setInterval(deleteMole(currentMole), 3000)
//
// deleteMole
//   remove mole from collection array
//   rerender the board/rerender that position
//   if score increment => tell game module to increase score
