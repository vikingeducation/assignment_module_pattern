//module board
  //8 squares

//module view = rendering board

//module controller = set callbacks on clicks

//module mole
//obj mole as a constructor

var  Game = Game || {};

Game.Mole = (function(){

  var moles = [];
  //Constructor Object
  function Mole() {
    this.look = "glyphicon glyphicon-eye-open";
    this.state = false;

  }

  function createMoles(){
    for(var i=0; i<8; i++){
      moles.push(new Mole())
    }
  }
  
  return {
    moles: moles,
    createMoles:createMoles,
  };

})();