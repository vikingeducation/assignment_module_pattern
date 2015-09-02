var RevealingModule = (function(){

  var stub = {};

  var _hiddenVar = 2;
  var _hiddenMethod = function(){
    return hiddenVar *2;
  }
  var publicVar = 4;
  stub.publicMethod = function(){
    return publicVar * 10;
  }
  stub.getPublicVar = function(){
    return publicVar;
  }
  stub.setPublicVar = function(val){
    return publicVar = val;
  }
  return stub

})();

