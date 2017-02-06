var controller = (function(modelFunc, viewFunc) {
  var numHoles = 8;
  var data = modelFunc(numHoles);
  var view = viewFunc(WM.boardModule, numHoles);

  var clickActive = function(event){
    data.incrementScore();
    var $target = $(event.target);
    var moleIndex = $(".mole").index($target);
    data.deactivateHole(moleIndex);
    view.deactivateHole(moleIndex);
    view.updateScore(data.score);
  };

  WM.boardModule.renderBoard(numHoles, callbacks = {
    clickActive: clickActive
  });

  var gameLoop = function() {
    var moleIndex = data.activateRandom();
    view.activateHole(moleIndex);
    setTimeout(function() {
      view.deactivateHole(moleIndex);
      data.deactivateHole(moleIndex);
    }, 2000);
  };
  setInterval(gameLoop, 600);

  return {
    data: data,
    view: view
  };
})(WM.model, WM.view);
