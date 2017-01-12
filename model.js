var WHACK_MOLE = WHACK_MOLE || {};

WHACK_MOLE.Model = (function() {

  var score = 0;
  var getScore = function getScore() {
    return score;
  }
  var increaseScore = function increaseScore() {
    score += 1;
  }

  return {
    getScore: getScore,
    increaseScore: increaseScore
  }

})();
