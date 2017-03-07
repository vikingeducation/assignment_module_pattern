var WAM = WAM || {};

WAM.Mole = (function(){

  var Mole = function(domElement){
    //the range in seconds the mole will show itself
    // which also will assign its point value,
    //the smaller the seconds value, the more points its worth
    this.seconds = WAM.getRandom(1, 4);
    this.points = 100 / this.seconds;
    this.visible = false;
    this.alive = true;
    this.domElement = domElement;
  };

  var allMoles = [];

  var init = function(moleCount, parentEl){
    var moleCount = 8, parentEl = $('#game-board');
    _createMoles(moleCount);
    _addMoleElementsToDOM(parentEl);
  };

  var _createMoles = function(moleCount){
    for (var i = 0; i < moleCount; i++){
      var domEl = $("<div>").addClass("mole-hole")
                            .attr("id", i);
      var newMole = new Mole(domEl);
      // console.log(); console.log(newMole) ; console.log(  )
      WAM.Mole.allMoles.push(newMole);
    }
  };

  var _addMoleElementsToDOM = function(parentEl){
    allMoles.forEach(function(mole){
      $(parentEl).append(mole.domElement);
    });
  };

  Mole.prototype.render = function(){
    if(this.alive && this.visible) {
      this.domElement.addClass()
    }
  };



  Mole.prototype.tic = function(){
    this.seconds--;
  };

  return {
    Mole: Mole,
    init: init,
    allMoles: allMoles
  };

}());