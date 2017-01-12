var moleControl = (function(modelFunction, viewFunction) {

  var moleQuantity = 8;
  var data = modelFunction(moleQuantity);
  var view = viewFunction(moleQuantity);
  
  var clickActive = function(event){
    data.incrementScore()
    data.incrementMultiplier()
    var $target = $(event.target)
    var moleIndex = $(".mole").index($target)
    data.moleDeactivate(moleIndex)
    view.toggleMole(moleIndex)
    view.updateScore(data.score)
    view.updateMultiplier(data.multiplier)
  }

  var clickInactive = function(){ 
    data.resetMultiplier()
    view.updateMultiplier(data.multiplier)
  }


  view.setupBoard(moleQuantity, callbacks = {
    clickInactive: clickInactive,
    clickActive: clickActive
  });



  return {
    data: data,
    view: view
  }

})(MOLES.model, MOLES.view);
