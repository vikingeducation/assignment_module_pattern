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

  var randomMole = function(){
    var min = 0,
        max = WAM.Mole.allMoles.length,
        moleIndex = WAM.getRandom(min, max);
    return allMoles[moleIndex];
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

  var _addClickListeners = function(){
    $("#game-board").on("click", ".mole-hole", function(){
      var moleId = $(this).attr('id'),
          mole = allMoles[moleId];

      if (mole.alive && mole.visible) {
        mole.visible = false;
        mole.domElement.removeClass("active-mole");
      }
    });
  }

  Mole.prototype.render = function(){
    if(this.alive && this.visible) {
      console.log(this)
      this.domElement.addClass("active-mole");
    } else {
      this.domElement.removeClass("active-mole");
    }
  };

  updateMoles = function(){
    allMoles.forEach(function(mole){
      mole.render();
      mole.tic();
    })
  };

  Mole.prototype.tic = function(){
    this.seconds--;
  };

  var init = function(moleCount, parentEl){
    var moleCount = 8, parentEl = $('#game-board');
    _createMoles(moleCount);
    _addMoleElementsToDOM(parentEl);
    _addClickListeners();

    randomMole().visible = true;
  };

  return {
    Mole: Mole,
    init: init,
    allMoles: allMoles,
    randomMole: randomMole,
    updateMoles: updateMoles
  };

}());