var MD = MD || {}

MD.Module2 = (function() {

  var stub = {};

  var _hidden = "hidden2";
  var _hiddenMethod = function() {
    return "I am a hidden function";
  }
  var public = "public2";
  var publicMethod2 = function() {
    return "I access " + _hidden + " and " + public;
  }

  stub.getVar =
    (function() {
      return public;
    })()

  stub.setVar = function(val) {
    return public = val;
  }
  stub.method2 = publicMethod2;

  return stub;
})();
