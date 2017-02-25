var moduleOne = (function(){
  var stub = {};

  var hiddenVar = "im hiding";
  var hiddenMethod = function() { return 'hiding' };

  var publicVar = 'outchea';
  stub.publicVarGetter = function() { return publicVar };
  stub.publicVarSetter = function(arg) { return publicVar = arg };
  stub.publicMethod = function() {
    var a = hiddenVar;
    var b = publicVar;
    return ('Are you ' + a + ' or ' + b + '?');
  };

  return stub;




  // REVEALING MODULE
  // var _hiddenVar = "i'm hiding";
  // var _hiddenMethod = function() { return 'hiding' };
  // var publicVar = 'outchea';
  // var publicVarGetter = function() { return publicVar };
  // var publicVarSetter = function(arg) { return publicVar = arg };
  // var publicMethod = function() { 
  //   var a = _hiddenMethod();
  //   var b = publicVarGetter();
  //   return ('Are you ' + a + ' or ' + b + '?');
  // };

  // return {
  //   publicVarSetter: publicVarSetter,
  //   publicVarGetter: publicVarGetter,
  //   publicMethod: publicMethod,
  // };
})();