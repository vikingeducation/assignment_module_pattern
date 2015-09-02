var JEWEL = JEWEL || {}

JEWEL.myStubModule = (function(){
  var stub = {};
  var _hiddenVar = 2;
  var _hiddenMethod = function(){
    return _hiddenVar;
  };

  stub.publicVar = 1;
  stub.getPublicVar = function(){
    return stub.publicVar;
  };
  stub.setPublicVar = function(newVal){
    stub.publicVar = newVal;
  };
  stub.publicAndTwo = function(){
    return _hiddenMethod() + stub.publicVar;
  };

  return stub;

})();
