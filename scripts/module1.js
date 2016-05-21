'use strict;'

var myFirstModule = (function(){
  var stub = {};

  var _secretName = "Harold";
  var publicName = "Harry";

  stub.getPublicName = function(){ return publicName };
  stub.setPublicName = function(newName){
    return publicName = newName
  };

  stub.whoAmI = function(){
    var text = 'I am ' + publicName + ' which is short for ' + _secretName
    console.log(text);
    return text;
  };

  return stub;
})();