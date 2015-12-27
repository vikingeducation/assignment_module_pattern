"use strict";

var MY_NAMESPACE = MY_NAMESPACE  || {};

MY_NAMESPACE.MyStub = (function() {

  var stub = {};

  var _myPrivateVariable = "Don't look at me!";
  var _myPrivateMethod = function() {
    return "The call is coming from inside the module!!!!";
  };

  var saySomethingClever = function() {
    return "Something clever.";
  };

  var myPublicVariable = "Set me and get me baby!";
  stub.myPublicVariable = function(value) {
    if (value !== undefined) {
      myPublicVariable = value;
    }
    return myPublicVariable;
  };

  stub.myPublicMethod = function() {
    return "Some of my module's favorite lines are: " +
      _myPrivateVariable + ', ' +
      _myPrivateMethod() + ', ' +
      myPublicVariable + ', ' +
      saySomethingClever();
  };

  stub.thingMyModuleCanNotDo = function() {
    return "It feels good when others depend on you.";
  };

  return stub;

})();

