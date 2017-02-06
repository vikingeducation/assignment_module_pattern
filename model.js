var WM = WM || {};

WM.model = function(holeNum){
  'use strict';
  var holes = WM.boardModule.generateHoles(holeNum);
  var score = 0;

  var pickRandom = function(){
    return Math.floor(Math.random() * holes.length);
  };

  var activateRandom = function(){
    var holeIndex = pickRandom();
    holes[holeIndex].active = true;
    return holeIndex;
  };

  var activeHoles = function(){
    var status = [];
    for(var i = 0; i < holes.length; i++){
      status.push(holes[i].active);
    }
    return status;
  };

  var deactivateHole = function(num){
    var hole = holes[num];
    hole.active = false;
  };

  var incrementScore = function(){
    this.score += 1;
  };

  return {
    holes: holes,
    score: score,
    pickRandom: pickRandom,
    activateRandom: activateRandom,
    activeHoles: activeHoles,
    deactivateHole: deactivateHole,
    incrementScore: incrementScore
  };

};
