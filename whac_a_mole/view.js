var View = (function($) {

  var _moles;
  var onHit;
  var gridSize;
  var userScore;

  var init = function(config) {
    _moles = config.allMoles;
    onHit = config.onHit;
    gridSize = config.gridSize;
    _renderEmptyGrid();
    clickListener();
    userScore = config.userScore;
  }

  var render = function(moles) {
    _moles = moles
    $('.mole').removeClass('mole');
    for (var i in _moles) {
      $("#" + _moles[i]).addClass("mole")
    }
    $('#user-score').text("You whaced: " + userScore() + " moles");
  }

  var _renderEmptyGrid = function() {

    for (var i = 0; i < gridSize; i++) {
      $cell = $("<div>")
        .addClass("cell")
        .attr("id", i)
        .appendTo($("#grid"))
    }
  }

  var clickListener = function() {
    $("#grid").on("click", ".mole", function() {
      var index = $(this).attr("id");
      onHit(parseInt(index));
    });
  }

  return {
    init: init,
    render: render
  }


})($);
