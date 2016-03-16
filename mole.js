var WhackAMole = WhackAMole || {};

WhackAMole.mole = (function() {
  
  var init = function(){
    generateMole();
  };

  var Mole = function() {
    this.x = Math.floor(Math.random()*2);
    this.y = Math.floor(Math.random()*4);
  };

  var generateMole = function() {
    return new Mole();
  };


  return{
    init:init, 
    generateMole: generateMole
  }

})();