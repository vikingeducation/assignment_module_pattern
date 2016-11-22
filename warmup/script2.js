var NS = NS || {}

NS.MyModule2 = (function(otherModule){
  var _privateVar = 9;
  var _privateVarGetMethod = function(){ return _privateVar };
  var publicVar = 9;
  var getPublicVar = function(){ return publicVar };
  var setPublicVar = function(val){ return publicVar = val };
  var anotherPublicMethod = function(val) { return getPublicVar() + _privateVarGetMethod() + val };
  var dependencyInjection = function() { return (otherModule.getPublicVar() + _privateVarGetMethod()) };
  return {
    getPublicVar: getPublicVar,
    setPublicVar: setPublicVar,
    anotherPublicMethod: anotherPublicMethod,
    dependencyInjection: dependencyInjection
  }
})(NS.MyModule);
