var WM = WM || {};

WM.boardModule = (function(){
  'use strict';

  var Hole = function(num) {
    this.id = num;
    this.active = false;
  };

  var generateHoles = function(num) {
    var holeArr = [];
    for (var i = 0; i < num; i++ ) {
      holeArr.push(new Hole(i));
    }
    return holeArr;
  };

  var renderBoard = function(holeNum, callbacks) {
    for (var i = 0; i < holeNum; i++) {
      $('#board').append($('<div class="hole inactive">'));
    }
    $('#board').on("click", ".mole", callbacks.clickActive);
  };

  return {
    Hole: Hole,
    generateHoles: generateHoles,
    renderBoard: renderBoard
  };

})();
