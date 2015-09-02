//Spaceship

//var SpaceShip = SpaceShip || {};

var SpaceShipModule = (function(){

  var _fleet = 1000;
  var _fuel = 500;
  var _food = 100;
  var medicine = 10;

  var getMedicine = function(){
    return medicine;
  };
  var setMedicine = function(num){
    return medicine = num;
  };


  //private
  var travelDistance = function(){
    if(_fuel*10 < _food/3) {
      return _fuel*10;
    } else
      {
        return _food/3*10;
      }
  };

  //public
  var medicineSale = function(){
    return medicine*0.3
  };

  var attackDistance = function(){
    return (travelDistance() / NumberOfFleetAvailable())
  };


  var NumberOfFleetAvailable = function(){
    if(_fuel/5 < _fleet){
      return _fuel/5;
    }
    else{
      return _fleet;
    }
  };

  return {
    medicineSale : medicineSale ,
    getMedicine : getMedicine,
    setMedicine : setMedicine,
    attackDistance : attackDistance,
    NumberOfFleetAvailable : NumberOfFleetAvailable
  };

})();