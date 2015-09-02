var  Game = Game || {};

Game.Controller = (function(){

  function init() {
    console.log("Game started");
    Game.BoardModule.initBoard();
    Game.Mole.createMoles();
    _listenClickes(Game.Mole.moles);
    moleLoop();
  }

  function _listenClickes(){
    
    $('.game-board').on('click', 'div', function(event){
      _dealWithMole(event);
    });
  
  }

  function _dealWithMole(e){
    var mole_id = $(e.target).attr("id");
    
    if(_isMole(mole_id)) {
      // $('#'+mole_id).removeClass("glyphicon glyphicon-eye-open").addClass("glyphicon glyphicon-minus");
      Game.Mole.moles[mole_id].toggleState();
      Game.Mole.renderMoles();
    }
   
  }
  
  var moleLoop = function(){
    setInterval( function(){
      Game.Mole.renderMoles();
      showMole();

    }, 3000);
  };

  function showMole(){
    var id = 0;
    var classMole = "glyphicon glyphicon-eye-open";
    // var i = 0;
    // do {
    //   id = Math.floor(Math.random()*8);
    //   if( i === 100){
    //     break;
    //   }
    //   i++;
    // } while ($('#'+id+'').hasClass(classMole));
    
      //normal code
      // $('#'+id+' span').removeClass("glyphicon glyphicon-eye-open").addClass(classMole);
      // Game.Mole.moles[id].state = true;

      //experimental
      // Game.Mole.moles[id].render(id);
      id = Math.floor(Math.random()*8);
      Game.Mole.moles[id].toggleState();

  }

  function _isMole(index){
    console.log(index);
    return Game.Mole.moles[index].state;
  }

  return {
    init: init,
  };

})();

$(document).ready(function(){
  console.log("Run");
  Game.Controller.init();
});