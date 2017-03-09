var WAM = WAM || {};

WAM.Mole = (function($, MainModule){
  var moles = {
    allMoles: [],
    activeMoleCount: 0
  };

  var Mole = function(domElement, moleId){
    //the range in seconds the mole will show itself
    // which also will assign its point value,
    //the smaller the seconds value, the more points its worth
    this.seconds = WAM.getRandom(1, 3);
    this.points = _assignPoints(this.seconds);
    this.visible = false;
    this.domElement = domElement;
    this.moleId = moleId;
  };

  var _assignPoints = function(seconds){
    return Math.ceil(100 / seconds);
  };

  var _createMoles = function(moleCount){
    for (var i = 0; i < moleCount; i++){
      var domEl = $("<div>").addClass("mole-hole")
                            .attr("id", i);
      var newMole = new Mole(domEl);

      moles.allMoles.push(newMole);
    }
  };

  var _randomMole = function(){
    var minIndex = 0,
        maxIndex = WAM.Main.moleCount - 1;
    moleIndex = WAM.getRandom(minIndex, maxIndex);
    return moles.allMoles[moleIndex];
  };

  var _addMoleElementsToDOM = function(parentEl){
    moles.allMoles.forEach(function(mole){
      $(parentEl).append(mole.domElement);
    });
  };

  var _addMoleClickListeners = function(){
    $("#game-board").on("click", ".mole-hole", function(){
      var moleId = $(this).attr('id'),
          mole = moles.allMoles[moleId];

      if (mole.visible) {
        mole.visible = false;
        mole.domElement.removeClass("active-mole");
        WAM.Main.updateScore(mole.points);
        moles.activeMoleCount--;
      }
    });
  }

  Mole.prototype.render = function(){
    if (this.visible) {
      this.domElement.addClass("active-mole");
      this.seconds--;
    } else {
      this.domElement.removeClass("active-mole");
    }
  };

  updateMoles = function(){
    _forceActiveMole();
    moles.allMoles.forEach(function(mole){
      mole.showSelf()
      mole.render();
    });
  };

  Mole.prototype.showSelf = function(){
    var chance = WAM.percentChance(5);
    if (chance) {
      this.visible = true;
      this.activeMoleCount++;
    }
  };

  var _forceActiveMole = function(){
    var mole = _randomMole();

    if (moles.activeMoleCount < 1) {
      mole.visible = true;
      moles.activeMoleCount++;
    }
  };

  var init = function(moleCount, parentEl){
    _createMoles(moleCount);
    _addMoleElementsToDOM(parentEl);
    _addMoleClickListeners();
    _forceActiveMole();
  };

  return {
    init: init,
    updateMoles: updateMoles,
  };

}($, WAM.Main));