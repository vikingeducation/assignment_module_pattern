var MOLES = MOLES || {};

MOLES.view = function() {
  var exports = {};

  exports.setupBoard = function(moleQuantity) {
    for (var i = 0; i < moleQuantity; i++) {
      $('.board').append($('<div class="mole">'));
    }
  };

  return exports;

};
