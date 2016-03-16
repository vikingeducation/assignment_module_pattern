var moleModule = (function() {

  var _score = 0;
  var css = "mole";

  var getScore = function() {
    return _score;
  }

  var incrementScore = function() {
    _score++;
  }

  // constructor to create mole
  function Mole() {
    this.css = css;
    this.number = Math.floor((Math.random() * 8));
  }

  return {
    Mole: Mole,
    getScore: getScore,
    incrementScore: incrementScore,
  };


})();

$(document).ready(function() {
    $(".row").on("click", ".mole", function() {
      moleModule.incrementScore();
      var allSquares = $(".square");
      allSquares.removeClass("mole");
    });

    setInterval(function() {
      var $score = $('.game-stats').text( 'Score:' + moleModule.getScore() );
      var allSquares = $(".square");

      //clear all squares of moles
      allSquares.removeClass("mole");

      //use module to create a new mole
      var mole = new moleModule.Mole();
      //spawn the mole to appropriate square using css
      allSquares[mole.number].className = "square " + mole.css;

    }, 1000);
  }
);
