var Mole = function(){
  // Create mole
  // Place on grid
  // (Must pass grid into mole to place)

  var Mole = function(){
    this.position = 0;
  }

  var setMolePosition = function(){

  }

}();

var User = function(){
  // User interactions (score, etc)
  var view = {
    init: function(){
      $('.mole-row').click(function(event){
      console.log(event);
      // var divClicked =
      });
    }
  };

  return {
    initializeView: view.init,
  };
}();

var Grid = function(Mole, $){

  var gameboard = {};

  var view = {
    init: function(){
      view.createGameboard();
    },

    createGameboard: function(){
      for(var i=0; i < 9; i++){
        $('.mole-row').append('<div class="col-md-3 mole-hole id="></div>');
      }
    },

    render: function(){
      $('.mole').removeClass('mole');
    },

    update: function(){
      // Create Mole
      // Render
    }

  };

  var getGamebord = function(){
    return gameboard;
  };

  var setGameboard = function(position, object){
    return gameboard[position] = object;
  };


  return{
    getGamebord: getGamebord,
    setGameboard: setGameboard,
    render: view.render,
    update: view.update,
    initializeView: view.init
  };

}(Mole, $);

var Main = function(User, Grid, $){
  // Click listener on row
  // At random intervals select a div and set to "mole" class
  // If user clicks div when "mole" class set then mole is hit and score increments
  var init = function(){
    User.initializeView();
    Grid.initializeView();
    gameLoop();
  };

  var gameLoop = function(){
    window.gameLoop = window.setInterval(function(){Grid.update(); console.log("running");}, 1000);
  };

  return {
    init: init
  };
}(User, Grid, $);


$(document).ready(function(){Main.init();});
