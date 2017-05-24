var MOLES = MOLES || {};

MOLES.View = (function() {

  var init = function(callbacks) {
    $('#start').on('click', function() {
      _listenForWhacks(callbacks.moleWhacked);
      callbacks.startGame();
    });
  }

  var _listenForWhacks = function(moleWhacked) {
    $('.moles li').on('click', function() {
      if ($(this).hasClass('mole')) {
        moleWhacked();
      }
    });
  }

  var clearBoard = function() {
    $('.mole').removeClass('mole');
  }

  var renderScore = function(score) {
    $('#points').text(score);
  }

  var showMole = function(molePos) {
    $('.moles li[data-id=' + molePos + ']').addClass('mole');
  }

  return {
    init: init,
    showMole: showMole,
    renderScore: renderScore,
    clearBoard: clearBoard
  }
})();