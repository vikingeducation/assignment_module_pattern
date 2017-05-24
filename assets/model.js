var MOLES = MOLES || {};

MOLES.Model = (function() {
  var _score = 0;
  var _max = 800;
  var _min = 300;

  var reset = function() {
    _score = 0;
  }

  var createMolePosition = function() {
    return Math.floor(Math.random() * 8) + 1;
  }

  var getRandomInterval = function() {
    return Math.floor(Math.random() * (_max - _min)) + _min;
  }

  var updateScore = function() {
    _score += 10;
  }

  var getScore = function() {
    return _score;
  }

  return {
    reset: reset,
    updateScore: updateScore,
    createMolePosition: createMolePosition,
    getRandomInterval: getRandomInterval,
    getScore: getScore
  }
})();