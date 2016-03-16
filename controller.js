var WhackAMole = WhackAMole || {};

WhackAMole.controller = (function() {

  var currentMole;

  var init = function() {
    WhackAMole.mole.init();
    WhackAMole.board.init();
    WhackAMole.view.init();
    gameLoop();
  };

  var gameLoop = function() {
    console.log('loop');
    setInterval(function() {
      currentMole = WhackAMole.mole.generateMole();
      WhackAMole.view.renderMole(currentMole);
    }, 1000);
  };

  var setCurrentMole = function(mole){
    currentMole = mole;
  };

  return {
    init: init,
    moleInHole: moleInHole,
    setCurrentMole: setCurrentMole
  };
})();

