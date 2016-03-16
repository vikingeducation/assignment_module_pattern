var NAMESPACE = NAMESPACE || {};

NAMESPACE.StubModule = ( function(theModule) {
  var stub = {};

  var hidden = "I'm hidden!";
  var publicVar = "I'm public!"

  var hiddenMethod = function() {
    console.log("lots of hidden " + hidden + " stuff going on here")
  }

  stub.publicMethod = function() {
    console.log("Calling a hidden method:");
    hiddenMethod();
    console.log("Calling a method from another module:");
    theModule.publicMethod();
  }

  stub.setPublicVar = function(value) {
    publicVar = value;
  }

  stub.getPublicVar = function() {
    return publicVar;
  }

  return stub;
} )(NAMESPACE.TheModule);
