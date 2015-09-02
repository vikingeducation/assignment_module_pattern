//Spaceship

var Space = Space || {};

Space.Spaceship = (function(){

  var stub = {};

  var _fleet = 1000;
  var _fuel = 500;
  var _food = 100;
  var medicine = 10;
  var bullets = 5;

  stub.getMedicine = function(){
    return medicine;
  };
  stub.setMedicine = function(num){
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

  stub.bulletFired = function(){
    return bullets -= 1;
  };

  //public
  stub.medicineSale = function(){
    return medicine*0.3;
  };

  stub.attackDistance = function(){
    return (travelDistance() / stub.NumberOfFleetAvailable());
  };


  stub.NumberOfFleetAvailable = function(){
    if(_fuel/5 < _fleet){
      return _fuel/5;
    }
    else{
      return _fleet;
    }
  };

  return stub;

  // return {
  //   medicineSale : medicineSale ,
  //   getMedicine : getMedicine,
  //   setMedicine : setMedicine,
  //   attackDistance : attackDistance,
  //   NumberOfFleetAvailable : NumberOfFleetAvailable
  // };

})();