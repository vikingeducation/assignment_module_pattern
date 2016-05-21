'use strict;'

var mySecondModule = (function(){
  var stub = {};

  var _secretPower = "bringing joy";
  var publicPower = "licking face";

  stub.getPublicPower = function(){ return publicPower };
  stub.setPublicPower = function(newPower){
    return publicPower = newPower;
  };

  stub.whatAreMyPowers = function(){
    // var text = 'I am ' + publicName + ' which is short for ' + _secretName
    var text = "My super power seems like it is " + publicPower + ", but it is actually " + _secretPower
    console.log(text);
    return text;
  };

  return stub;
})();