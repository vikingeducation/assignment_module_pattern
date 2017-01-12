var WHACK_MOLE = WHACK_MOLE || {};

WHACK_MOLE.View = (function() {
  var gameWrapper = document.getElementsByTagName('whack-mole')[0];
  var lastFlashed,
      squares,
      scoreHeader;

  var renderRow = function renderRow(size) {
    size = size || 8;
    var square;

    for(var i = 0; i < size; i++) {
      square = $('<div>').addClass('square').attr("id", i);

      $(gameWrapper).append(square);
    }

    squares = $('whack-mole .square');

  }

  var renderScore = function renderScore(score) {
    scoreHeader = scoreHeader || addScoreHeader(score);

    scoreHeader.text('Score: ' + score);
  }

  var addScoreHeader = function addScoreHeader(score){
    scoreHeader = $('<h2>').text('Score: ' + score);
    $(gameWrapper).append(scoreHeader);

    return scoreHeader;
  }

  var flash = function flash() {
    unflash();

    var randI = Math.floor(Math.random() * squares.length);

    lastFlashed = squares.eq(randI).addClass('flash');

    return lastFlashed;
  }

  var unflash = function unflash() {
    if (lastFlashed) lastFlashed.removeClass('flash');
    lastFlashed = null;
  }

  var checkMatch = function checkMatch(targetID) {
    if (lastFlashed) {
      return targetID === lastFlashed.attr("id");
    }
    return false;
  }

  var addEventListener = function addEventListener(clickHandler) {
    $(gameWrapper).on('click', '.square', clickHandler)
  }

  var init = function init(clickHandler, score, size) {
    renderRow(size);
    renderScore(score);
    addEventListener(clickHandler);
  }

  return {
            init: init,
            flash: flash,
            unflash: unflash,
            renderScore: renderScore,
            checkMatch: checkMatch
         }
})();
