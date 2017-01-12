'use strict';

var MOLE = MOLE || {};

MOLE.Controller = (function(View) {

  var init = function() {
    View.init();
  };



  return {
    init: init
  };

})(MOLE.View);



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
