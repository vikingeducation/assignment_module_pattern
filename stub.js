var Module2 = (function() {

  var stub = {};

  var _hidden = "hidden";
  var _hiddenMethod = function() {
    return "I am a hidden function";
  }
  var public = "public";
  var publicMethod = function() {
    return "I access " + public + " and " + _hidden;
  }

  stub.getVar =
    (function() {
      return public;
    })()

  stub.setVar = function(val) {
    return public = val;
  }
  stub.method = publicMethod

  return stub;
})();
