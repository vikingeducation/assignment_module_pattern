var app = app || {};

app.module = (function(text, $) {
  var _$h1;
  var stub = {};

  var _getH1Length = function() {
    return _$h1.text().length
  }

  stub.init = function() {
    _$h1 = $("h1");
  };

  stub.setH1Text = function() {
    _$h1.text(text);
  };

  stub.getH1Text = function() {
    return _$h1.text();
  };

  stub.getTextAndLength = function() {
    console.log(_$h1.text());
    console.log(_getH1Length());
  };

  return stub;

})("hiiiii", $);


$(document).ready(function() {
            app.module.init();
            app.module.setH1Text();
            })
