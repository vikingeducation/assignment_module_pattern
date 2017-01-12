var WHACK_MOLE = WHACK_MOLE || {};

WHACK_MOLE.View = (function() {
  var gameWrapper = document.getElementsByTagName('whack-mole')[0];
  var lastFlashed,
      squares;

  var renderRow = function renderRow(size) {
    size = size || 8;
    var square;

    for(var i = 0; i < size; i++) {
      square = $('<div>').addClass('square').attr("id", i);

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

  var checkMatch = function checkMatch(targetID) {
    return targetID === lastFlashed.attr("id");
  }

  var addEventListener = function addEventListener(clickHandler) {
    $(gameWrapper).on('click', '.square', clickHandler)
  }

  var init = function init(clickHandler, size) {
    renderRow(size);
    addEventListener(clickHandler); 
  }

  return {
            init: init,
            flash: flash,
            checkMatch: checkMatch
         }
})();
