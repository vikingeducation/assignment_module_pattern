'use strict';

var MOLE = MOLE || {};

MOLE.Controller = (function(View, Game) {

  var init = function() {
    View.init();
    Game.init();
    setInterval(gameLoop, Math.random() * 3000 + 1000)
  };

  var updateMole = function(id) {
    Game.removeMole(id);
    View.clearMole(id);
  }
  
  var gameLoop = function() {
    var currentMole = Game.addMole();
    if (currentMole) {
      View.renderMole(currentMole.id);
      setTimeout(updateMole(currentMole.id), 3000);
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
