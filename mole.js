var moleModule = (function() {
  var mole = function() {
    var rand = Math.floor(Math.random() * 8);
    this.home = rand;
  };

  return {
    mole: mole
  }
})();

var gameModule = (function(moleModule, $) {

  var score = 0;

  var buildBoard = function() {
    for (var i = 0; i < 8; i++) {
      var hole = $('<div>')
        .addClass('hole')
        .attr('data-id', i);
      $('.board').append(hole);
    }
  };

  var addMole = function() {
    var mole = new moleModule.mole();
    console.log(mole);
    $('.mole').removeClass('mole');
    $('[data-id=' + mole.home + ']').addClass('mole');
  };

  var tic = function() {
    setInterval(function(){
      var rand = Math.floor(Math.random() * 5);
      var counter = 0;
      if (counter === rand) {
        addMole();
        rand = Math.floor(Math.random() * 5);
        counter = 0;
      }
      counter += 1;
    }, 200);
  };

  var setMoleListener = function() {
    $('.board').on("click", ".mole", function() {
      addMole();
      score++;
      updateScore();
    });
  };

  var updateScore = function(){
    $('#score').html("Your score is: " + score);
  }

  return {
    init: function() {
      buildBoard();
      tic();
      updateScore();
      setMoleListener();
    }
  }

})(moleModule, $);



$(document).ready(function() {
  gameModule.init();
});