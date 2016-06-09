'use strict;'

// Add to the existing namespace or
// initialize a new one instead
var MP = MP || {}

MP.myFirstModule = (function(){
  var stub = {};

  var _secretName = "Harold";
  var publicName = "Harry";

  stub.getPublicName = function(){ return publicName };
  stub.setPublicName = function(newName){
    return publicName = newName
  };

  stub.whoAmI = function(){
    var text = 'I am ' + publicName + ' which is short for ' + _secretName + '.';
    return text;
  };

  return stub;
})();