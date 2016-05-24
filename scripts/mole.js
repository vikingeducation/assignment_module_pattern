'use strict;'

var WAM = WAM || {}

WAM.MoleModule = (function (){

  function _randomPosition(numHoles){
    return Math.floor(Math.random() * numHoles);
  }

  function hideMole(mole){
    $('#' + mole.position).removeClass('mole');
  }

  // Constructor for a new Mole
  function Mole(numHoles){
    this.init(numHoles);
  }

  Mole.prototype.init = function(numHoles){
    this.position = _randomPosition(numHoles);
    this.render();
    this.countdown();
  };

  // Render the mole
  Mole.prototype.render = function(){
    $('#' + this.position).addClass('mole');
  };

  Mole.prototype.countdown = function(){
    var duration = Math.floor(Math.random() * 3500) + 1000;
    var self = this;
    window.setTimeout(hideMole, duration, self);
  };

  return {
    Mole: Mole,
    hideMole: hideMole
  };
})();