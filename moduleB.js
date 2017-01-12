var moduleB = (function(moduleA) {
  'use strict';
  var stub = {};

  var _hiddenVar = 10;
  var _hiddenMethod = function() {
    console.log(_hiddenVar);
  };
  var publicVar = "Hello";
  stub.publicVarSetter = function(input) {
    return publicVar = input;
  };
  stub.publicVarGetter = function() {
    return publicVar;
  };
  stub.publicAndPrivate = function() {
    for (var i = 0; i < _hiddenVar; i++) {
      console.log(stub.publicVarGetter());
    }
  };

  moduleA.moduleAdded();

  return stub;
})(moduleA);
