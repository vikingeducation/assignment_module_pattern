var Controller = (function(Model, View) {

  var userScore = 0;

  var _playGame = function() {
    View.render(Model.moleLocations());
    _clock++;
    if (_clock % 25 === 0) {
      Model.placeMole();
    }
    if (_clock % 90 === 0) {
      Model.removeRandomMole();
    }
  };

  var incrementScore = function() {
    userScore += 1;
  };

  var _setTheInterval = function() {
    setInterval(_playGame, 100);
  };

  var init = function() {
    _setTheInterval();
    View.init({
      userScore: function() {
        return userScore;
      },
      allMoles: Model.moleLocations(),
      onHit: function(index) {
        Model.removeMole(index);
        incrementScore();
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
