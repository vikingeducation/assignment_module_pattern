var ML = ML || {};


ML.BoardModule = (function(){

  var $board = $(".board");
  var _boardArray = [];
  var _index;
  var _score = 0;

  function init(){
    for (var i = 0; i < 8; i++) {
      _boardArray[i] = false;
    }
  }

  function getBoardVars(){
    ML.$board = $(".board");
  }

  function renderBoard() {
    for (var i = 0; i < 8; i++) {
      if (_boardArray[i]) {
         $("#hole-"+i).addClass("lit");
      }
      else{
        $("#hole-"+i).removeClass("lit");
      }
    }
  }

  function showScore() {
    $(".score").text(_score);
  }

  function listenMouseClick() {
    $("body").on("click",".board",function(event) {
      console.log("Clicked mouse ");
      var position = $(event.target);

      if (position.hasClass("lit")) {
        _score++;
        position.removeClass("lit");
        update();
      }
    });
  }

  function randomLit(){
    _index = Math.floor(Math.random() * 8);
    _boardArray[_index] = true;
  }

  function getHoleLit(i){
    return _boardArray[i];
  }

  function update(){
    init();
    randomLit();
    renderBoard();
    showScore(); 
    listenMouseClick();
  }

  function getScore(){
    return _score;
  }

  function gameLoop() {
    setInterval(update,1000);
  }

  // Return all public methods and properties
  return {
    gameLoop: gameLoop,
    getScore: getScore
  };
})();

$( document ).ready(function(){
  ML.BoardModule.gameLoop();
});
