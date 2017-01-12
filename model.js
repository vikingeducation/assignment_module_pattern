var MOLES = MOLES || {};

MOLES.model = function(moleQuantity){
  var exports = {};

  var moles = moleModule.makeMoles(moleQuantity);
  exports.moleList = moles;
  exports.score = 1;
  exports.multiplier = 1;

  exports.pickMole = function(){
    var rand = Math.floor(Math.random() * moles.length);
    return rand;
  };

  exports.revealMole = function(){
    var index = exports.pickMole();
    moles[index].active = true;
    return index;
  };

  exports.moleStatus = function(){
    var status = [];
    for(var i = 0; i < moles.length; i++){
      status.push(moles[i].active);
    }
    return status;
  };

  exports.deactivateMole = function(number){
    var mole = moles[number];
    mole.active = false;
  };

  exports.incrementScore = function(){
    exports.score += exports.multiplier;
  };

  exports.incrementMultiplier = function(){
    exports.multiplier += 1;
  };

  exports.resetMultiplier = function(){
    exports.multiplier = 1;
  };

  return exports;
};
