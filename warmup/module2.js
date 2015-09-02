var Mods = Mods || {};

Mods.ModuleTwo = function(){

  var moduleTwoPublicVar = 5;
  var moduleTwoPrivateVar = 3;

  var getModuleTwoPublicVar = function(){
    return moduleTwoPublicVar;
  };

  var setModuleTwoPublicVar = function(num){
    return moduleTwoPublicVar = num;
  };

  var moduleTwoPublicMethod = function(num){
    return moduleTwoPublicVar = num * 25;
  };

  return{
     getModuleTwoPublicVar: getModuleTwoPublicVar,
     setModuleTwoPublicVar: setModuleTwoPublicVar,
     moduleTwoPublicMethod: moduleTwoPublicMethod
  };

}();