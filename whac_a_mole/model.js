var Model = (function(){

  var _grid = [];

  function moleLocations() {
    var locations = []
    for(var i = 0; i < _grid.length; i++) {
      if (_grid[i] === "MOLE") {locations.push(i);
      }
    }
    return locations
  };

  var placeMole = function(){
    _grid[Math.floor(Math.random() * _grid.length)] = "MOLE"; 
  };

  var removeRandomMole = function() {
    var locations = moleLocations();
    var length = locations.length;
    if(length > 0) {
      _grid[locations[Math.floor(Math.random() * length)]] = null;
    }
  };

  var removeMole = function(index) {
    _grid[index] = null;
  };

  var setNullGridVals = function() {
    for(var i = 0; i < 8; i+=1) {
      _grid[i] = null;
    }
  };


  return {
    moleLocations: moleLocations,
    placeMole: placeMole;
    removeMole: removeMole;
    init: function() {
      setNullGridVals();
    }
  }

})()