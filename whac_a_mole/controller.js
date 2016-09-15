var Controller = (function(Model, View) {

  var _playGame = function() {
    View.render(Model.moleLocations());
    _clock++;
    if (_clock % 50 === 0) {
      Model.placeMole();
    }
    if (_clock % 90 === 0) {
      Model.removeRandomMole();
    }
  };

  var _setTheInterval = function() {
    setInterval(_playGame, 100);
  };

  var init = function() {
    _setTheInterval();
    View.init({
      allMoles: Model.moleLocations(),
      onHit: function(index) {
        Model.removeMole(index)
      },
      gridSize: Model.getNumCells()
    })
  }

  var _clock = 0;


  return {
    init: init
  }

})(Model, View)


$(document).ready(function() {
  Controller.init();

})
