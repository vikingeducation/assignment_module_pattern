var WhackAMole = WhackAMole || {};

WhackAMole.mole = function() {
  var Mole = function() {
    this.x = Math.floor(Math.random()*2);
    this.y = Math.floor(Math.random()*4);
  };

  var generateMole = function() {
    var currentMole = new Mole();
    return currentMole;
  };
})();