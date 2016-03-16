var WhackAMole = WhackAMole || {};

WhackAMole.view = (function() {
  var totalScore = 0;

  var init = function(){
    $('#game-board').on('click', '.mole', function(event) {
        totalScore++;
        $(event.target).removeClass('mole');
        $(event.target).addClass('hole');
      }
  )};

  var renderMole = function(mole) {
    var x = mole.x;
    var y = mole.y;

    $('[data-y=' + y + '][data-x=' + x + ']').removeClass('hole');

    $('[data-y=' + y + '][data-x=' + x + ']').addClass('mole');
   
  };

  return {
    init: init,
    renderMole: renderMole
  }
})();
