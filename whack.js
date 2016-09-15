var APP = APP || {};

APP.model = (function() {
  var _moles;
  var _score = 0;

  var _createMole = function() {
    _moles = [false, false, false, false, false, false, false, false];
    var moleNum = Math.floor(Math.random() * _moles.length);
    _moles[moleNum] = true;
  };

  var _updateScore = function() {
    _score++;
  };

  var _checkHit = function(num) {
    if (_moles[num]) {
      _updateScore();
    }
  };

  return {
    getMoles: function() {
      _createMole();
      return _moles;
    },

    checkHit: _checkHit,

  };

})();

APP.view = (function($) {

  var _render = function(moles) {
    var $game = $('#game')
    $game.html('');
    for (var i = 0; i < moles.length; i++) {
      var div = $('<div class="molehole">');
      if (moles[i]) {
        div.addClass('active');
      }
      $game.append(div);
    }
  };

  return {
    render: _render
  }

})($);

APP.controller = (function(model, view) {

  var _gameLoop = function() {
    setInterval(function() {
      var moles = model.getMoles();
      view.render(moles);
    }, 1000);
  }

  return {
    init: function() {
      _gameLoop();
    }
  }

})(APP.model, APP.view);

$(document).ready(function() {
  APP.controller.init();
});
