var View = (function($) {

  var _moles;
  var onHit;
  var gridSize;

  var init = function(config) {
    _moles = config.allMoles;
    onHit = config.onHit;
    gridSize = config.gridSize;
    clickListener();
  }

  var render = function(moles) {
    _moles = moles
    $("#grid").empty();
    _renderEmptyGrid();
    for (var i in _moles) {
      $("#" + _moles[i]).addClass("mole")
    }
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
    console.log("listener called")
    $('#grid').on("click", ".cell", function() {
      console.log("clicked!")

      var index = $(this).attr("id");
      onHit(index);
    });
  }

  return {
    init: init,
    render: render
  }


})($);
