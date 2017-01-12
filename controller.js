var moleControl = (function(modelFunction, viewFunction) {

  var moleQuantity = 8;
  var data = modelFunction(moleQuantity);
  var view = viewFunction(moleQuantity);
  view.setupBoard(moleQuantity);

  return {
    data: data,
    view: view
  }

})(MOLES.model, MOLES.view);
