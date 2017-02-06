var WM = WM || {};

WM.view = function(boardFunc, holeNum){
  'use strict';

  var activateHole = function(holeIndex) {
    $('.hole:nth-child('+(holeIndex + 1)+')')
      .addClass('mole')
      .removeClass('inactive');
  };

  var deactivateHole = function(holeIndex) {
    $('.hole:nth-child('+(holeIndex + 1)+')')
      .addClass('inactive')
      .removeClass('mole');
  };

  var updateScore = function(score){
    $('#score').text(score);
  };

  return {
    activateHole: activateHole,
    deactivateHole: deactivateHole,
    updateScore: updateScore
  };
};
