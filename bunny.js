var ANIMALS = ANIMALS || {}


ANIMALS.Bunny = (function(Dinosaur) {

  var _fluffiness = "EXTRA FLUFFY";
  var name = "Buttons";

  var roar = function() {
    return Dinosaur.roarType();
  }

  var carrots = function() {
    Dinosaur.carrots = function() {
      return "I love carrots omnomnomnomnom";
    }
  }

  Dinosaur.hop = function() {
    return "I like hopping ROAR"
  }

  var getName = function() {
    return name;
  }

  var hop = function() {
    return true;
  }

  var whoIsHopping = function() {
    if (hop) {
      return getName();
    }
  }


  return {
    getName: getName,
    whoIsHopping: whoIsHopping,
    roar: roar,
    carrots: carrots
  }



})(ANIMALS.Dinosaur);