var WM = WM || {}

WM.MoleModule = (function() {
  var _active = false;

  //Constructor
  function Mole(){
    this.active = _active;
  }

  //Member Functions - Getter
  Mole.prototype.isActive = function() {
    return this.active;
  }

  //Member Functions - Setter
  Mole.prototype.setActive = function() {
    this.active = true;
  }
  Mole.prototype.setInactive = function() {
    this.active = false;
  }

  //Render Mole based on it's state
  Mole.prototype.render = function(index, board){
    if (this.active === true) {
      $(board.children()[index]).addClass("mole")
    } else {
     $(board.children()[index]).removeClass("mole")
    }
  }

  //Interface
  return {
    Mole: Mole,
  };

})();