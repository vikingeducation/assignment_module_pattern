// reveal
var MyModule = (function(){
  'use strict';

  var _hidden = 2;

  var _hiddenMethod = function(){
    return "No to be shown";
  };

  var publicVar = 11;

  var publicMethod = function(){
    return _hidden * 3;
  };

  var getPublicVar = function() {
    return publicVar;
  };

  var setPublicVar = function(newVal) {
    return publicVar = newVal;
  };

  return {
    getPublicVar: getPublicVar,
    setPublicVar: setPublicVar,
    publicMethod: publicMethod,
  };
})();

// stub
// var MyModule = (function(){
//   'use strict';
//
//   var stub = {};
//   var _hidden = 2;
//
//   var _hiddenMethod = function(){
//     return "No to be shown";
//   };
//
//   stub.publicVar = "Okay to show";
//
//   stub.publicMethod = function(){
//     return _hidden * 3;
//   };
//
//   stub.getPublicVar = function() {
//     return stub.publicVar;
//   };
//
//   stub.setPublicVar = function(newVal) {
//     return stub.publicVar = newVal;
//   };
//
//   return stub;
// })();
