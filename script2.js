var  app = app || {}

app.module2 = (function(text, $, module) {
  var _$h1;
  var stub = {};

  var _getH2Length = function() {
    return _$h1.text().length
  }

  stub.init = function() {
    _$h1 = $("h2");
  };

  stub.setH2Text = function() {
    _$h1.text(text);
  };

  stub.getH2Text = function() {
    return _$h1.text();
  };

  stub.getTextAndLength = function() {
    console.log(_$h1.text());
    console.log(_getH1Length());
  };

  stub.getH1Text = module.getH1Text;

  return stub;

})("bye", $, app.module);


$(document).ready(function() {
            app.module2.init();
            app.module2.setH2Text();
            console.log(app.module2.getH1Text());
            })
