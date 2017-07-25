var core = (function() {
  var colors = [
    "red", "orange", "yellow", "olive",
    "green", "purple", "blue", "black"
  ];
  var colorized = new Set();
  var colorize_interval = 3000;
  var points_multiplier = 10;
  var score = 0;

  var new_game = function() {
    // reset score
    // reset the moles
    // reset the counters
    $(".mole").css("background-color", "white");
    score = 0;
    render_score();
    colorized.clear();
  }

  var render_score = function() {
    $(".score").html("Score: " + score);
  }

  var get_color = function($elt) {
    return colors[$elt.attr("data-color")];
  };

  var decolorize = function($elt) {
    $elt.css("background-color", "white");
    colorized.delete(get_color($elt));
  };

  var random_colorize = function() {
    var $elt, color, elt, $mole;
    $mole = $(".mole")
    elt = rand_nth($mole);
    $elt = $(elt);
    color = get_color($elt);
    if (colorized.length == $mole.length) {
      setTimeout(random_colorize, 2000);
    } else if (colorized.has(color)) {
      random_colorize()
    } else {
      // add to the set of colored divs
      colorized.add(color)
      console.log("Colorizing -> " + color);
      // set the background-color
      $elt.css("background-color", color);
      // decolorize if its not clicked after a while
      setTimeout(function() {
        decolorize($elt);
      }, colorize_interval);
    }
  };

  var init = function() {
    setInterval(random_colorize, colorize_interval);

    $(".moles").on("click", ".mole", function(e) {
      var $this = $(e.target);
      if (colorized.has(get_color($this))) {
        score += points_multiplier;
        render_score();
        decolorize($this);
      }
    });

    $(".new-game").on("click", new_game);
  };

  return {
    init: init
  };
})();

$(document).ready(function() {
  core.init();
});
