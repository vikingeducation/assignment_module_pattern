// Stub Variant

/*
PUBLIC VARIABLES/METHODS ACCESSIBLE VIA AN INTERFACE:
    getPublico: getPublico,
    setPublico: setPublico,
    spammer: spammer
*/

var NAMESPACE = NAMESPACE || {};

NAMESPACE.revealingModuleStubVariant = (function(anotherModule){
  var stub = {};

  var _privy = 10;
  var publico = "Eat that frog";

  var _oppositizer = function(boolean){
    return !boolean;
  };

  stub.getPublico = function(){
    return publico;
  };
  stub.setPublico = function(newValue){
    publico = newValue;
    return publico;
  };

  stub.spammer = function(){
    var times = _privy,
        message = _oppositizer(true),
        otherModuleMessage = anotherModule.getPublico();

    for (var i = 0; i < times; i++){
      console.log(otherModuleMessage);
      console.log(publico);
      console.log(message);
    }
  };

  return stub;

})(NAMESPACE.secondModule);


//non-stub, revealing module version
/*
var revealingModule = (function(){
  var _privy = 10;
  var publico = "Eat that frog";

  var _oppositizer = function(boolean){
    return !boolean;
  };

  var getPublico = function(){
    return publico;
  };
  var setPublico = function(newValue){
    publico = newValue;
    return publico;
  };

  var spammer = function(){
    var times = _privy,
        message = _oppositizer(true);

    for (var i = 0; i < times; i++){
      console.log(publico);
      console.log(message);
    }
  };

  return {
    getPublico: getPublico,
    setPublico: setPublico,
    spammer: spammer
  }

})();
*/