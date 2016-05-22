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
    // _listenForClick();
    // _startGameLoop();
  };


  // Build the moles
  var _buildHoles = function(num){
    console.log("...building Holes...");
    for (var i = 0; i < _numHoles; i++) {
      var $hole = $('<div><div>')
        .attr('class', 'hole')
        .attr("id", i);
      $('#game-board').append($hole);
    }
  }


  // // When the player initiates a click
  // // startFueling the activeLauncher
  // function _listenForMouseDown(){
  //   ML.BoardModule.$board.on("mousedown",function(e){
  //     _activeLauncher.startFueling();
  //   })
  // }


  // // When the player releases a click
  // // fireMortar from the activeLauncher
  // // activateNextLauncher
  // function _listenForMouseUp(){
  //   ML.BoardModule.$board.on("mouseup",function(e){
  //     _activeLauncher.fireMortar();
  //     _activateNextLauncher();
  //   })
  // }


  // // On each tic of the game loop
  // // clearRenderedObjects
  // // render Mortars
  // function _tic(){

  //   // Perform the behind-the-scenes work
  //   _ticLaunchers();
  //   _ticMortars();
  //   _convertMortarsToExplosions();

  //   // Perform the rendering work
  //   _clearRenderedObjects();
  //   _renderLaunchers();
  //   _renderMortars();

  //   // Perform clean-up work
  //   _clearFadedExplosions();
  // }


  // Set the interval to run _tic
  function _startGameLoop(){
    console.log("setting up game loop");
    setInterval(function(){
      _tic();
    }, 100)
  }


  // // Add a mortar to the fired mortars array
  // function addFiredMortar(mortar){
  //   _firedMortars.push(mortar);
  // }


  // // Convert any exploded Mortars into Explosions
  // // We'll otherwise treat these as normal Mortars
  // // until they fizzle out because they inherit
  // // from Mortars.
  // // We're treating them polymorphically.
  // function _convertMortarsToExplosions(){

  //   _firedMortars.forEach(function(mortar, index, array){
  //     if(mortar.exploding == true){

  //       // Get the explosion our mortar turned into.
  //       var explosion = mortar.convertToExplosion();

  //       // Splice that in place of the "exploded" mortar
  //       array.splice(index, 1, explosion);

  //     };
  //   });
  // }


  // // Clear any faded explosions from the mortars array
  // function _clearFadedExplosions(){
  //   _firedMortars.forEach(function(mortar, index, array){
  //     if(mortar.finished == true){
  //       array.splice(index, 1);
  //     };
  //   });
  // }


  // // Run the increment "tic" on all launchers
  // function _ticLaunchers(){
  //   _launchers.forEach(function(launcher){
  //     launcher.tic();
  //   });
  // }


  // // run the increment "tic" on all mortars
  // function _ticMortars(){
  //   _firedMortars.forEach(function(mortar){
  //     mortar.tic();
  //   });
  // }


  // // Go through the queue rendering all mortars and
  // // explosions
  // function _renderMortars(){
  //   _firedMortars.forEach(function(mortar){
  //     mortar.render();
  //   });
  // }


  // // Go through the queue rendering all launchers
  // function _renderLaunchers(){
  //   _launchers.forEach(function(launcher, b, c){
  //     launcher.render();
  //   });
  // }


  // Return public methods
  return stub;

})();
