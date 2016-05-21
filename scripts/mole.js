'use strict;'

var WAM = WAM || {}

WAM.MoleModule = (function (){

  // 0 for hidden, 1 for popped up
  var _initialStatus = 0;

  // Constructor for a new Mole
  function Mole(id){
    this.id = id;
    this.status = _initialStatus;
  }


  // Create a mortar at that position with an initial
  // velocity which is derived from the _fuel
  // Remove _fueling state and reset _fuel
  Mole.prototype.popUp = function(){
  };

  return { Mole: Mole };
})();