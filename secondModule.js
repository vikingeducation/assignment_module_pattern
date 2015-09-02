
var Space = Space || {};

Space.civilSpaceShip = (function(module){

  var _cargo = 25;
  var _civilians = 25;

  var pilots = function(){
    if(module._fleet < _civilians){
      return module._fleet;
    }else{
      return _civilians;
    }
  };
  
  return {
    pilots: pilots
  }

})(Space.Spaceship || {} );