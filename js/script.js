var Module = (function(){

  var _hiddenVar = 4;

  var _hiddenMethod = function(){
    console.log("I'm hidden from sight");
  }

  var public = "I AM A PUBLIC VARIABLE";

  return {
    public: function(){
      return public;
    },

    setPublic: function(value){
      public = value;
    },

    publicMethod: function(){
      console.log("IM SO PUBLIC AND OUT IN THE OPEN");
      console.log("I WILL HELP THE PRIVATE METHOD TALK on the next line");
      _hiddenMethod();
    }
  }

})()