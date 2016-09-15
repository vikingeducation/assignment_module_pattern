var Model = (function() {

  var _grid = [];
  var cells = 8;

  function moleLocations() {
    var locations = []
    for (var i = 0; i < _grid.length; i++) {
      if (_grid[i] === "MOLE") {
        locations.push(i);
      }
    }
    return locations
  };

  var placeMole = function() {
    _grid[Math.floor(Math.random() * cells)] = "MOLE";
  };

  var removeRandomMole = function() {
    var locations = moleLocations();
    var length = locations.length;
    if (length > 0) {
      _grid[locations[Math.floor(Math.random() * length)]] = null;
    }
  };

  var removeMole = function(index) {
    _grid[index] = null;
  };

  var setNullGridVals = function() {
    for (var i = 0; i < cells; i += 1) {
      _grid[i] = null;
    }
  };


  return {
    moleLocations: moleLocations,
    placeMole: placeMole,
    removeMole: removeMole,
    removeRandomMole: removeRandomMole,
    getNumCells: function(){ return cells },
    init: function() {
      setNullGridVals();
    }
  }

})()
