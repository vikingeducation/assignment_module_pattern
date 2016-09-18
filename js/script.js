var Module = (function(){

  var hiddenVar = 4;

  var hiddenMethod = function(){
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
      console.log("I WILL HELP THE PRIVATE METHOD TALK NOW");
      hiddenMethod();
    }
  }

})()