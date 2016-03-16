var ANIMALS = ANIMALS || {};


ANIMALS.Dinosaur = (function() {

  var _height = 300; // hidden variable
  var type = "Tyrannasaurus Rex";  // public variable

  // private method
  var roar = function() {
    return "ROAR!!!!!";
  }

  // public method
  var getType = function() {
    return type;
  }

  // public method that uses private and public methods
  var roarType = function() {
    return "I'm a " + getType() + " " + roar();
  }

  return {
    getType: getType,
    roarType: roarType
  }


})();



ANIMALS.DinosaurStub = (function() {

  // use var for properties, and for private methods

  var stub = {};

  var height = 300;
  var type = "T-Rex"; 

  var roar = function() {
    return "ROAR!!!!!";
  }

  stub.getType = function() {
    return type;
  }

  stub.roarType = function() {
    return "I'm a " + stub.getType() + " " + roar();
  }

  return stub;
})();