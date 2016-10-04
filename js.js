var moduleMaker = function(){
  // The underscore is by convention
  var _privateVar = 123;
  var publicVar = 456;
  return {
    getPublicVar: function(){
      return publicVar;
    }
  };
}

myModule = moduleMaker()
myModule.getPublicVar()
//=> 456

var myModule = function() {
  var _privateVar = 246;
  var publicVar = 579;
  var setPublicVar = function(num){
    return publicVar = num;
  };
  var getPublicVar = function(){
      return publicVar;
  };


  return {
    setPub: setPublicVar,
    getPub: getPublicVar

    
  };
}
