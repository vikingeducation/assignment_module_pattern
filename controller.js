var WhackAMole = WhackAMole || {};

WhackAMole.controller = (function() {
  var moleInHole: function() {

  };

  var init: function() {
    WhackAMole.mole.init();
    WhackAMole.board.init();
    WhackAMole.view.init();
  };

  var gameLoop: function() {
    setInterval(function() {
      WhackAMole.mole.generateMole();
      WhackAMole.view.renderMole();
    }, 1000);
  }

  return {
    init: init,
    moleInHole: moleInHole
  };
}();


$(document).ready(function() {
  WhackAMole.controller.init();
})