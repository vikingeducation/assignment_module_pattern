"use strict";

var WHACK_A_MOLE = WHACK_A_MOLE || {};

WHACK_A_MOLE.Game = (function(Mole, $) {
  var NUM_MOLES = 8;

  var _score = 0;

  var _outputScore = function() {
    $('#score').text('Score: ' + _score);
  };

  var _setMoles = function() {
    for (var i = 0; i < NUM_MOLES; i++) {
      var mole = new WHACK_A_MOLE.Mole();
      $('#game').append(mole.$element);
    }
  };

  return {
    init: function() {
      $('#game').addClass('row');
      _outputScore();
      _setMoles();
      $(document).on('score', this.score);
    },

    score: function() {
      _score++;
      _outputScore();
    }
  };

})(WHACK_A_MOLE.Mole, $);

