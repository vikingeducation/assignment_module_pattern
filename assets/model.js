var MOLES = MOLES || {};

MOLES.Model = (function() {
  var score = 0;
  var max = 800;
  var min = 300;

  var reset = function() {
    score = 0;
  }

  var createMolePosition = function() {
    return Math.floor(Math.random() * 8) + 1;
  }

  var getRandomInterval = function() {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var updateScore = function() {
    score += 10;
  }

  var getScore = function() {
    return score;
  }

  return {
    reset: reset,
    updateScore: updateScore,
    createMolePosition: createMolePosition,
    getRandomInterval: getRandomInterval,
    getScore: getScore
  }
})();