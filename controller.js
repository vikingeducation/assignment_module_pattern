var  Game = Game || {};

Game.Controller = (function(){

  function init() {
    console.log("Game started");
    Game.BoardModule.initBoard();
    Game.Mole.createMoles();
    console.log()
    _listenClickes(Game.Mole.moles);
    moleLoop();
  }

  function _listenClickes(){
    $('.game-board').on('click', 'div', function(event){
      _dealWithMole(event);
    });
  }

  function _dealWithMole(e){


    if(_checkMole($(e.target).attr("id"))) {
      $('#'+$(e.target).attr("id") + ' span').removeClass("glyphicon glyphicon-eye-open").addClass("glyphicon glyphicon-minus");
    }
   
  }
  var moleLoop = function(){setInterval( function(){showMole()}, 1000);}

  function showMole(){
    var id = 0;
    var classMole = "glyphicon glyphicon-eye-open"
    do { 
      id = Math.floor(Math.random()*8);
    } while ($('#'+id+'').hasClass(classMole));
    
      $('#'+id+' span').removeClass("glyphicon glyphicon-eye-open").addClass(classMole);
      Game.Mole.moles[id].state = true;

    
  }
  //Game.Mole.moles[e.target.attr("id")].look
  function _checkMole(index){
    console.log(index)
    console.log(Game.Mole.moles[0].state)
    return Game.Mole.moles[index].state
  }
  return {
    init: init,
  };
})();

$(document).ready(function(){
  console.log("Run");
  Game.Controller.init();
});