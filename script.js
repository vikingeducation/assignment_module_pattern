var MYAPP = MYAPP || {};

MYAPP.ourModule = (function() {

  var stub = {};

  var _private = "Hello";
  var _privateMethod = function() {
    console.log("Hello");
  };
  var publicVar = "Hi there";
  var publicFunc = function() {
    console.log("Hi there");
  };

  stub.getPublic = function() {
    return publicVar;
  };

  stub.setPublic = function(val) {
    publicVar = val;
  };

  stub.publicFunc = publicFunc;

  stub.getPrivate = function() {
    return _private;
  };

  return stub;
})();