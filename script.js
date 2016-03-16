var testModule = (function() {

  var _privateVar = 666;

  var _privateMethod = function() {
    return _privateVar;
  };

  var publicVar = 100;

  var getPublicVar = function() {
    return publicVar;
  };

  var setPublicVar = function(input) {
    publicVar = input;
  };

  var sayHi = function() {
    console.log("Hello");
  };

  return {
    getPublicVar: getPublicVar,
    setPublicVar: setPublicVar,
    sayHi: sayHi
  };

})();
