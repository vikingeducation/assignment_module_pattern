//module board
  //8 squares

//module view = rendering board

//module controller = set callbacks on clicks

//module mole
//obj mole as a constructor

var  Game = Game || {};

Game.Mole = (function(){


  //Constructor Object
  function Mole(){
    this.look = "glyphicon glyphicon-eye-open";
    this.state = false;

  }
  
  return {
    Mole: Mole,
  };

})();