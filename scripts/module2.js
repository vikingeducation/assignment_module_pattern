'use strict;'

MP.mySecondModule = (function(otherModule){
  var stub = {};

  var _secretPower = "bringing joy";
  var publicPower = "licking face";

  stub.getPublicPower = function(){ return publicPower };
  stub.setPublicPower = function(newPower){
    return publicPower = newPower;
  };

  stub.whatAreMyPowers = function(){
    var text = "My super power seems like it is " + publicPower + ", but it is actually " + _secretPower + '.';
    return text;
  };

  stub.describeMe = function(){
    return otherModule.whoAmI() + ' ' + this.whatAreMyPowers();
  };

  return stub;
})(MP.myFirstModule);