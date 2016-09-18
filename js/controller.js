var Controller = (function(View, Mole){
  
  var whackMole = function(){
    Mole.incrementScore();
    View.showScore(Mole.score());
  }

  var init = function(){
    Mole.init();
    //calls view.init
    //pass any callbacks the view might need to it's init function

    View.init(whackMole);

    //set the mole showing interval
    setInterval(play, 1000);
  };

  var play = function(){
    
    //remove listener for old moles

    
    var mole = Mole.randomMole();
    //set listener for new mole
    View.showMole(mole);

    View.showScore(Mole.score());
    //show a mole
    //set an event listener for the mole being showed
    //give a point if the mole is clicked
  }
  

  return {
    init: init

  }

})(View, Mole)


$(document).ready(function(){
  Controller.init();
})