var NAMESPACE = NAMESPACE || {};

NAMESPACE.secondModule = (function(){
  var stub = {};

  var publico = "I come from module II";

  stub.getPublico = function(){
    return publico;
  };
  stub.setPublico = function(newValue){
    publico = newValue;
    return publico;
  };

  return stub;

})();