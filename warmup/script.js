
var NS = NS || {}

NS.MyModule = (function(){
  var stub = {};

  var _privateVar = 1;
  var _privateVarGetMethod = function(){ return _privateVar };
  var publicVar = 2;
  stub.getPublicVar = function(){ return publicVar };
  stub.setPublicVar = function(val){ return publicVar = val };
  stub.anotherPublicMethod = function(val) { return stub.getPublicVar() + _privateVarGetMethod() + val };

  return stub;
})();

