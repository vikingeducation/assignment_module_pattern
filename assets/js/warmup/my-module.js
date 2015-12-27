"use strict";

var MY_NAMESPACE = MY_NAMESPACE || {};

MY_NAMESPACE.MyModule = (function(MyStub) {

  var _myPrivateVariable = "Don't look at me!";
  var _myPrivateMethod = function() {
    return "The call is coming from inside the module!!!!";
  };

  var saySomethingClever = function() {
    return "Something clever.";
  };

  var myPublicVariable = "Set me and get me baby!";
  var myPublicMethod = function() {
    return "Some of my module's favorite lines are: " +
      _myPrivateVariable + ', ' +
      _myPrivateMethod() + ', ' +
      myPublicVariable + ', ' +
      saySomethingClever();
  };

  var thingICanNotDoOnMyOwn = function() {
    return "MyModule: I depend on you MyStub... \n" +
      "MyStub: " + MyStub.thingMyModuleCanNotDo();
  };

  return {
    myPublicVariable: function(value) {
      if (value !== undefined) {
        myPublicVariable = value;
      }
      return myPublicVariable;
    },
    myPublicMethod: myPublicMethod,
    thingICanNotDoOnMyOwn: thingICanNotDoOnMyOwn
  };

})(MY_NAMESPACE.MyStub);

