var MyModule = (function(){

  var _myVar = "private var";
  var publicVar = "public var";

  var _myMethod = function() {
      return "Accessing private method!"
  }

  var publicMethod = function(){
      return "Accessing public method!" };

  var getPublicVar = function(){
      return publicVar };

  var setPublicVar = function(val){ 
      return publicVar = val };

  return { 
    getPublicVar: getPublicVar,
    setPublicVar: setPublicVar,
    publicMethod: publicMethod,
  }

})();


//The "Stub Object"
var MyModule = (function(args){
  var stub = {};

  //private vraiable
  var privateProp = "private - val1";
  
  //private Function
  var privateFunc = function(){
       return "accessing private method!" }

  //public var;     
  var publicProp = "public - val2";

  stub.getPublicProp = function(){ return publicProp };
  stub.setPublicProp = function(val){ return publicProp = val };
  stub.publicFunc = function(){ 
    return "I'm a public function!"}

  return stub;
})()