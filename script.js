var NAMESPACE = NAMESPACE || {}

NAMESPACE.myModule = (function(myStubModule){
  var _hiddenVar = 1;
  var _hiddenMethod = function(){
    return _hiddenVar;
  };
  var publicVar = 1;
  var getPublicVar = function(){
    return publicVar;
  };
  var setPublicVar = function(newVal){
    publicVar = newVal;
  };
  var publicAndOne = function(){
    return _hiddenMethod() + publicVar;
  };

  var depInj = function(){
    return myStubModule.publicAndTwo() + publicAndOne();
  };

  return {
    getPublicVar: getPublicVar,
    setPublicVar: setPublicVar,
    publicAndOne: publicAndOne,
    depInj: depInj,
  };

})(NAMESPACE.myStubModule);
