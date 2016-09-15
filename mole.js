var module = (function($) {

  var buildBoard = function() {
    for (var i = 0; i < 8; i++) {
      var hole = $('<div>')
        .addClass('hole')
        .attr('data-id', i);
      $('.board').append(hole);
    }
  };

  var addMole = function() {
    var rand = Math.floor(Math.random() * 8);
    $('.mole').removeClass('.mole');
    $('[data-id=' + rand + ']').addClass('.mole');
  };

  return {
    init: buildBoard
  }

})($);



$(document).ready(function() {
  module.init();
});