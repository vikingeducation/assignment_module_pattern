'use strict';

var MOLE = MOLE || {};

MOLE.View = (function(Config) {
  var _images = ['catherine.png', 'alexa.jpg'];

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

  var renderMole = function(id) {
    var $hole = $('.mole-hole').filter("[data-id='"+ id + "']");
    var image = _images[Math.floor(Math.random() * 2)];
    var $moleDiv = $('<div>')
        .addClass('mole-image')
        .css('background-image', 'url(/images/' + image + ')');
    $hole.append($moleDiv);
  }

  var clearMole = function(id) {
    var $hole = $('.mole-hole').filter("[data-id='"+ id + "']");
    $hole.children('mole-image').remove();
  }

  return {
    init: init,
    renderMole: renderMole,
    clearMole: clearMole
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
