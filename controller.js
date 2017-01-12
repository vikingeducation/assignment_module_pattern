var moleControl = (function(modelFunction, viewFunction) {

  console.log("Starting controller");

  var moleQuantity = 8;
  var data = modelFunction(moleQuantity);
  var view = viewFunction(moleQuantity);
  view.setupBoard(moleQuantity);

})(MOLES.model, MOLES.view);
