var WhackAMole = WhackAMole || {};

WhackAMole.view = (function() {
  var totalScore = 0;

  var init = $('.hole').on('click', function(event) {
    if (WhackAMole.controller.moleInHole()) {
      totalScore++;
      event.target.removeClass('mole');
    }
  });

  var renderMole = function() {

  };

  return {
    init: init,
    renderMole: renderMole
  }
}();

$(document).ready(function() {
  WhackAMole.view.init();
})