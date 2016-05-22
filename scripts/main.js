'use strict;'

// Namespace our entire  game within a
// single namespace called "WAM"
var WAM = WAM || {}


// The overall controller of the game setup and play
WAM.MainModule = (function(){

  var stub = {};

  // Private Variables
  var _numHoles = 8;
  var _moles = [];

  // Public Variables
  var score = 0;

  // Score getter method
  stub.getScore = function(){ return score };

  // Build moles, Set up click listeners, Kick off game loop
  stub.init = function(){
    console.log("Initializing Main Module...");
    _buildHoles();
    _listenForClick();
    _startGameLoop();
  };


  // Build the holes
  var _buildHoles = function(num){
    console.log("...building Holes...");
    for (var i = 0; i < _numHoles; i++) {
      var $hole = $('<div><div>')
        .attr('class', 'hole')
        .attr("id", i);
      $('#game-board').append($hole);
    }
  }


  // Click listener
  function _listenForClick(){
    $('.hole').click(_detectMole);
  }

  // Increase score, and remove mole image
  function _detectMole(event){
    if ($(event.target).hasClass('mole')){
      score += 1;
      _renderScore();
      $(event.target).removeClass('mole');
    }
  }

  // On each tic of the game loop
  function _tic(){
    // Remove any remaining moles
    _clearMoles();

    // Add a new mole
    _addMole();
  }

  // Set the interval to run _tic
  function _startGameLoop(){
    console.log("setting up game loop");
    setInterval(function(){
      _tic();
    }, 2500)
  }

  function _renderScore(){
    $('#score').text(score);
  }

  function _clearMoles(){
    _moles = [];
    $('.hole').removeClass('mole');
  }

  function _addMole(){
    _moles.push(new WAM.MoleModule.Mole(_numHoles));
  }

  // Return public methods
  return stub;

})();
