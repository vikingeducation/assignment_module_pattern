var Mole = (function(){

  var moleConstructor = function(){
    this.position = 0;
  };

  return{
    moleConstructor: moleConstructor
  };

})();

var User = (function(){
  var score = 0;

  var getScore = function(){
    return score;
  };

  var setScore = function(){
    score++;
  };

  return {
    getScore: getScore,
    setScore: setScore
  };

})();

var Grid = (function(Mole, User, $){

  var gameboard = {};
  var gridSize = 8;

  var init = function(){
    createGameboard();
    setClickListener();
  };

  var createGameboard = function(){
    for(var i=0; i < gridSize; i++){
      $('.mole-row').append('<div class="col-xs-3 mole-hole" id="' + i + '"></div>');
      Grid.setGameboard(i, '');
    }
  };

  var setClickListener = function(){
    $('.mole-row').on('click', '*', function(event){
      var divClicked = $(event.currentTarget).attr('id');
      checkhit(divClicked);
    });
  };

  var removeMole = function(){
    $('.mole').removeClass('mole');
  };

  var update = function(){
    var newMole = new Mole.moleConstructor();     // Create new mole
    removeMole();                                 // Remove prev mole
    placeMoleOnGameboard(newMole);                // Place mole
    $('#'+newMole.position).addClass('mole');
    $('#score').text(User.getScore);
  };

  var placeMoleOnGameboard = function(newMole){
    newMole.position = Math.floor(Math.random()*gridSize);
    gameboard[newMole.position] = newMole;
  };

  var getGameboard = function(){
    return gameboard;
  };

  var setGameboard = function(position, object){
    gameboard[position] = object;
  };

  var checkhit = function(divClicked){
    if ($('#'+divClicked).hasClass('mole')) {
      User.setScore();
      update();
      console.log(User.getScore());
    }
  };

  return{
    getGameboard: getGameboard,
    setGameboard: setGameboard,
    update: update,
    init: init,
  };

})(Mole, User, $);

var Main = (function(User, Grid, $){
  var init = function(){
    Grid.init();
    gameLoop();
  };

  var gameLoop = function(){
    window.gameLoop = window.setInterval(function(){Grid.update(); console.log("running");}, 2000);
  };

  return {
    init: init
  };
})(User, Grid, $);


$(document).ready(function(){Main.init();});
