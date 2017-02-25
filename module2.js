var MODULE = MODULE || {};

MODULE.Two = (function(injectedModule){

  var _secretNumber = 1;
  var _secretMethod = function(){ return _secretNumber++ };

  var publicNumber = 10;
  var getPublicNumber = function(){ return publicNumber };
  var setPublicNumber = function(num){ return publicNumber = num };
  var publicMethod = function(){
    var a = _secretMethod();
    var b = publicNumber;
    return (a + b);
  };

  injectedModule.anotherPublicMethod = function(){ console.log('hi' )};
  //var extendedPublicMethod = function(){  };

  return {
    getPublicNumber: getPublicNumber,
    setPublicNumber: setPublicNumber,
    publicMethod: publicMethod,
    //injectedModule.anotherPublicMethod : injectedModule.anotherPublicMethod
  };


})(MODULE.One || {})