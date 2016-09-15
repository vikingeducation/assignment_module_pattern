
var Module = (function() {

  var _hidden = "hidden";
  var _hiddenMethod = function() {
    return "I am a hidden function";
  }
  var public = "public";
  var publicMethod = function() {
    return "I access " + public + " and " + _hidden;
  }

  return {
    getVar: (function(){ return public; })(),
    setVar: function(val){ return public = val; },
    method: publicMethod
  }
})();


// console.log(Module.getVar)
