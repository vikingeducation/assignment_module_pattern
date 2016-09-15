var APP = APP || {};

APP.model = (function() {
  var _moles;
  var _score = 0;

  var _createMole = function() {
    _setMolesToFalse();
    var moleNum = Math.floor(Math.random() * _moles.length);
    _moles[moleNum] = true;
  };



  var _setMolesToFalse = function() {
    _moles = [false, false, false, false, false, false, false, false];
  }

  var _updateScore = function() {
    _score++;
  };


  return {
    getMoles: function() {
      return _moles;
    },

    createMoles: _createMole,

    getScore: function() {
      return _score;
    },

    killMole: function() {
      _setMolesToFalse();
      _updateScore();
    }
  };

})();

APP.view = (function($) {

  var _render = function(moles, score) {
    var $game = $('#game')
    $game.html('');

    for (var i = 0; i < moles.length; i++) {
      var div = $('<div class="molehole">');
      if (moles[i]) {
        div.addClass('active');
      }
      $game.append(div);
    }

    $("#score").text(score)
  };

  var _clickListener = function(controller) {
    $("#game").on("click", ".active", controller.clickHandler)
  }

  return {
    init: function(controller) {
      _clickListener(controller)
    },

    render: _render
  }

})($);

APP.controller = (function(model, view) {

  var _gameLoop = function() {
    var counter =  0
    model.createMoles();

    setInterval(function() {
      var moles = model.getMoles();
      view.render(moles, model.getScore());
      if(counter % 10 === 0) {
        model.createMoles();
      }
      counter++
    }, 200);
  }



  return {
    init: function() {
      view.init(this);
      _gameLoop();
    },

    clickHandler: function(e) {
      model.killMole();
    }
  }

})(APP.model, APP.view);

$(document).ready(function() {
  APP.controller.init();
});
