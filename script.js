var Module = (function() {

  var stub = {};

  var _hiddenVar = "this is hidden";
  var _hiddenMethod = function() {
    return "this is a hidden method";
  }

  var publicVar = "this is public";
  stub.getPublicVar = function() {
    return publicVar;
  }
  stub.setPublicVar = function(newVal) {
    publicVar = newVal;
  }

  stub.publicMethod = function() {
    console.log("This is _hiddenVar:", _hiddenVar);
    console.log("This is publicVar:", stub.getPublicVar());
    console.log("This is _hiddenMethod:", _hiddenMethod());
  }

  return stub;

})();

var Module2 = (function(Module) {

  var stub = {};

  var _hiddenVar = "this is hidden";
  var _hiddenMethod = function() {
    return "this is a hidden method";
  }

  var publicVar = "this is public";
  stub.getPublicVar = function() {
    return publicVar;
  }
  stub.setPublicVar = function(newVal) {
    publicVar = newVal;
  }

  stub.publicMethod = function() {
    console.log("This is _hiddenVar:", _hiddenVar);
    console.log("This is publicVar, from Module:", Module.getPublicVar());
    console.log("This is _hiddenMethod:", _hiddenMethod());
  }

  return stub;

})(Module);
