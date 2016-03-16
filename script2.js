
var MYSPACE = MYSPACE || { };

MYSPACE.testModule2stub = (function() {

  var _privateVar = 666;
  stub = {};

  var _privateMethod = function() {
    return _privateVar;
  };

  var publicVar = 100;

  stub.andrew = function() {
    console.log(' go viking');
  };

  stub.getPublicVar = function() {
    return publicVar;
  };

  stub.setPublicVar = function(input) {
    publicVar = input;
  };

  stub.sayHi = function() {
    console.log("Hello");
  };

  return stub;
})();
