'use strict;'

var WAM = WAM || {}

WAM.MoleModule = (function (){

  // 0 for hidden, 1 for popped up
  var _initialStatus = 0;

  function _randomPosition(numHoles){
    return Math.floor(Math.random() * numHoles);
  }

  function _hideMole(mole){
    $('#' + mole.position).removeClass('mole');
  }

  // Constructor for a new Mole
  function Mole(numHoles){
    this.position = _randomPosition(numHoles);
    this.render();
    this.countdown();
  }

  // Render the mole
  Mole.prototype.render = function(){
    $('#' + this.position).addClass('mole');
  };

  Mole.prototype.countdown = function(){
    var duration = Math.floor(Math.random() * 4000) + 1000;
    var self = this;
    window.setTimeout(_hideMole, duration, self);
  };

  return { Mole: Mole };
})();