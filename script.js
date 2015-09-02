//Spaceship
  //accelerate 
  //shoot
  //xposition
  //yposotion
  //xspeed
  //yspeed
  //bullets


var SpaceShip = SpaceShip || {};

SpaceShip.Module = (function(){

  var _fleet = 1000;
  var _fuel = 500;
  var medicine = 10;
  var food = 100;

  var getMedicine = function(){
    return medicine;
  };

  var setMedicine = function(num){
    return medicine = num;
  };

  var travelTime = function(){
    vay days = 0
  }

  var NumberOfFleetAvailable = function(){
    if(_fuel/5 < _fleet){
      return _fuel/5;
    }
    else{
      return _fleet;
    }

  };








})