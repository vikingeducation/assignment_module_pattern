'use strict;'

var myFirstModule = (function(){
  var _secretName = "Harold";
  var publicName = "Harry";

  var getPublicName = function(){ return publicName };
  var setPublicName = function(newName){
    return publicName = newName
  };

  var whoAmI = function(){
    var text = 'I am ' + publicName + ' which is short for ' + _secretName
    console.log(text);
    return text;
  };

  return {
    getPublicName: getPublicName,
    setPublicName: setPublicName,
    whoAmI: whoAmI
  }
})();