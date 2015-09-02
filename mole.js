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
      moles.push(new Mole());
    }
  }

  //experimental
  // Mole.prototype.render = function(mole_id){
    // $mole = $('#'+mole_id)
    // .removeClass("glyphicon glyphicon-minus")
    // .addClass("glyphicon glyphicon-eye-open");
  function renderMoles(){
    for( var i = 0; i < moles.length; i++){
      if(moles[i].state === true){
        $mole = $('#'+i)
        .removeClass("glyphicon glyphicon-minus")
        .addClass("glyphicon glyphicon-eye-open");
      }
      else{
        $mole = $('#'+i)
        .removeClass("glyphicon glyphicon-eye-open")
        .addClass("glyphicon glyphicon-minus");
      }
    }
  }

  Mole.prototype.toggleState = function(){
    if (this.state === false){
      this.state = true;
    }
    else{
      this.state = false;
    }
  };
  /////////

  return {
    moles: moles,
    renderMoles: renderMoles,
    createMoles:createMoles
  };

})();