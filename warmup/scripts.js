'use strict';

var APP = APP || {};

APP.RevealingModule = (function(bunnyMod) {
  var _hiddenVar = "some hidden value";
  var _hiddenMethod = function() {
    _hiddenVar += " has been changed by _hiddenMethod";
    console.log(_hiddenVar);
  };

  var publicVar = "a public value";
  var publicGetter = function() {
    return publicVar;
  };
  var publicSetter = function(value) {
    return publicVar = value;
  };
  var publicMethod = function() {
    console.log(_hiddenVar);
    return _hiddenMethod();
  };

  var revealingDarkBunny = function(val) {
    var darkBunnySayings = bunnyMod.darkBunnySpotlight(val);
    return darkBunnySayings;
  };

  return {
    revealingDarkBunny: revealingDarkBunny,
    publicGetter: publicGetter,
    publicSetter: publicSetter,
    publicMethod: publicMethod
  };
})(APP.SecondModule);




// Stub

var StubModule = (function() {
  var _hiddenVar = "some hidden value";
  var _hiddenMethod = function() {
    _hiddenVar += " has been changed by _hiddenMethod";
    console.log(_hiddenVar);
  };

  var stub = {};

  var publicVar = "a public value";
  stub.publicGetter = function() {
    return publicVar;
  };
  stub.publicSetter = function(value) {
    return publicVar = value;
  };
  stub.publicMethod = function() {
    console.log(_hiddenVar);
    return _hiddenMethod();
  };

  return stub;
})();
