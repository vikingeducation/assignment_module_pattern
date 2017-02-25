var moduleOne = (function(){
  var _hiddenVar = "i'm hiding";
  var _hiddenMethod = function() { return 'hiding' };
  var publicVar = 'outchea';
  var publicVarGetter = function() { return publicVar };
  var publicVarSetter = function(arg) { return publicVar = arg };
  var publicMethod = function() { 
    var a = _hiddenMethod();
    var b = publicVarGetter();
    return ('Are you ' + a + ' or ' + b + '?');
  };

  return {
    publicVarSetter: publicVarSetter,
    publicVarGetter: publicVarGetter,
    publicMethod: publicMethod,
  };
})();