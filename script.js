var myModule = (function(){
  
  var stub = {};

  var _privateVar = "You don't need me!";
  var _privateFunc = function(){ return 6005; };
  var publicVar = 3389;
  var publicFunc = function(){
    var derivedCode = _privateFunc() + publicVar;
    return "The passphrase is: " + "'" + _privateVar + "' (" + derivedCode + ')';
  };
  var getPublicVar = function(){
    return publicVar;
  };
  var setPublicVar = function(val){
    return publicVar = val;
  };

  stub.publicVar = publicVar;
  stub.publicFunc = publicFunc;
  stub.getPublicVar = getPublicVar;
  stub.setPublicVar = setPublicVar;

  return stub;

})();