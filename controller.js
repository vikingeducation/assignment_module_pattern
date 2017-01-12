var WHACK_MOLE = WHACK_MOLE || {};

WHACK_MOLE.Controller = (function(View, Model) {

  var gameLoop = function gameLoop() {
    var interval = 500 + Math.floor(Math.random() * 1000);
    setTimeout( View.flash, interval);
  }


  var clickHandler = function clickHandler(e) {
    if (View.checkMatch(e.target.getAttribute("id"))) {
      console.log("Hit!")
    }
  }

  var init = function init() {
    View.init(clickHandler);
    setInterval(gameLoop, 1000);
  }

  return {
    init: init
  }

})(WHACK_MOLE.View, WHACK_MOLE.Model);

$(document).ready(function() {
  WHACK_MOLE.Controller.init();
});
