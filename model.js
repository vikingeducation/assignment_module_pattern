var MOLES = MOLES || {};

MOLES.model = function(moleQuantity){
  var exports = {};

  var moles = moleModule.makeMoles(moleQuantity);
  exports.score = 1;
  exports.multiplier = 1;

  exports.pickMole = function(){
    var rand = Math.floor(Math.random() * moles.length);
    return moles[rand];
  };

  exports.revealMole = function(){
    var mole = exports.pickMole();
    mole.active = true;
  };

  exports.moleStatus = function(){
    var status = [];
    for(var i = 0; i < moles.length; i++){
      status.push(moles[i].active);
    }
    return status;
  };

  exports.moleDeactivate = function(number){
    var mole = moles[number];
    mole.active = false;
  };

  exports.incrementScore = function(){
    exports.score += multiplier;
  };

  exports.resetMultiplier = function(){
    exports.multiplier = 1;
  };

  return exports;
};
