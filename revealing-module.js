var MD = MD || {}

MD.Module = (function(Module2) {

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
    method: publicMethod,
    method2: Module2.method2
  }
})(MD.Module2);


// console.log(Module.getVar)
