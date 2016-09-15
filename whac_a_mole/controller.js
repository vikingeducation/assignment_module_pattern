var Controller = (function(Model, View) {

  var _playGame = function() {
    View.render();
    _clock ++;
    if(_clock % 75 === 0) {
      Model.removeRandomMole();
      Model.placeMole();
    }

  };

  var _setTheInterval = function() {
    setInterval(_playGame, 40);
  };

  var init = function() {
    _setTheInterval();
    View.init({
      allMoles: Model.moleLocations(),
      onHit: function(index) {
        Model.removeMole(index)
      },
    })
  }

  var _clock = 0;


  return {
    // init: initializes model and view
    // has a getMoleLocations method that calls model method
    // userScore method that gets private variable _userScore
  }

})(Model, View)