var MYAPP = MYAPP || {};

MYAPP.newModule = (function(module) {
  var _privateVar = "This is a private string";
  var publicVar = "This one is public";
  var getPublic = function() {
    return publicVar;
  };
  var setPublic = function(val) {
    publicVar = val;
  };

  return {
    getPublic: getPublic,
    setPublic: setPublic,
    otherGetter: module.getPublic,
    otherSetter: module.setPublic
  };
})(MYAPP.ourModule);