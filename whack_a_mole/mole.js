var Mole = function(grid){
  // Create mole
  // Place on grid
  // (Must pass grid into mole to place)

}

var User = function(){
  // User interactions (score, etc)
  var view = {
    init: function(){
      $('.mole-row').click(function(){
      console.log("CLICK");
      });
    }
  }

  return {
    initializeView: view.init,
  }
}();

var Main = function(User, $){
  // Click listener on row
  // At random intervals select a div and set to "mole" class
  // If user clicks div when "mole" class set then mole is hit and score increments
  var init = function(){
    User.initializeView();
  }

  return {
    init: init
  }
}(User, $);

var Grid = function(){
  // Keeps track of state of grid
}

$(document).ready(function(){
  Main.init()
})
