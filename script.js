var NAMESPACE = NAMESPACE || {};

NAMESPACE.TheModule = ( function() {
  var _hidden = "I'm hidden!";
  var publicVar = "I'm public!"

  var hiddenMethod = function() {
    console.log("lots of hidden " + _hidden + " stuff going on here")
  }

  var publicMethod = function() {
    console.log("Calling a hidden method:");
    hiddenMethod();
  }

  var setPublicVar = function(value) {
    publicVar = value;
  }

  var getPublicVar = function() {
    return publicVar;
  }

  return {
    setPublicVar: setPublicVar,
    getPublicVar: getPublicVar,
    publicMethod: publicMethod
  }
} )();
