var SecondModule = (function(MyModule){
  'use strict';

  var _secret = 9;

  var _hiddenMethod = function(){
    return "No to be shown";
  };

  var openVar = "Okay to show";

  var openMethod = function(){
    return MyModule.getPublicVar() * _secret;
  };

  var getOpenVar = function() {
    return openVar;
  };

  var setOpenVar = function(newVal) {
    return openVar = newVal;
  };

  return {
    getOpenVar: getOpenVar,
    setOpenVar: setOpenVar,
    openMethod: openMethod,
  };
})(MyModule);
