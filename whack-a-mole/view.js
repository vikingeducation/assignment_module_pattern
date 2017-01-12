'use strict';

var MOLE = MOLE || {};

MOLE.View = (function(Config) {
  var init = function() {
    _renderBoard();
  };

  var _renderBoard = function() {
    var $container = $('.container');

    for (var i = 0; i < Config.boardLength; i++) {
      var $moleHole = $('<div>').addClass('mole-hole').attr({
        'data-id': i
      });
      $container.append($moleHole);
    }
  };

  return {
    init: init
  };

})(MOLE.Config);

// - event listener for clicks on a mole space (delete cb, score increment)
//
// - rendering the board
// div class="space" data-spot="2"
//
// - render mole
//
// - derender mole
