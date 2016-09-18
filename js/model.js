var Mole = (function(){

  function mole(id){
    this.id = id;
  }

  var randomMole = function(){
    var moleIndex = Math.ceil(Math.random() * 7);
    var mole = moles[moleIndex];
    //mole is a function definition
    //mole.id is undefined
    console.log(mole)
    return mole.id;
  }

  var score = 0;

  var moles = [];

  var generateMoles = function(){
    for(var i = 1; i <= 8; i++){
      var m = new mole(i);
      moles.push(m);
    }
  }

  return {

    init: function(){
      
      generateMoles();
    },

    randomMole: randomMole,

    score: function(){
      return score;
    },

    incrementScore: function(){
      score += 1;
    },

    moles: function(){
      return moles;
    }
  }


})()