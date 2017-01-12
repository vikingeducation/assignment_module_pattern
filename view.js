var WHACK_MOLE = WHACK_MOLE || {};

WHACK_MOLE.View = (function() {
  var gameWrapper = document.getElementsByTagName('whack-mole')[0];
  var lastFlashed,
      squares;

  var renderRow = function renderRow(size) {
    size = size || 8;
    var square;

    for(var i = 0; i < size; i++) {
      square = $('<div>').addClass('square');

      $(gameWrapper).append(square);
    }

    squares = $('whack-mole .square');

  }

  var flash = function flash() {
    if (lastFlashed) lastFlashed.removeClass('flash');

    var randI = Math.floor(Math.random() * squares.length);

    lastFlashed = squares.eq(randI).addClass('flash');

    return lastFlashed;
  }

  var init = function init(size) {
    renderRow(size);
  }

  return {
            init: init,
            flash: flash
         }
})();
