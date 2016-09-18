var View = (function(){
  
  var _whackMole;

  var init = function(callback){

    _whackMole = callback;
  }

  var showMole = function(id){
    $(".mole").hide();
    $(".mole").off("click");
    
    $("#mole" + id).click(_whackMole);
    $("#mole" + id).show();
  }

  var showScore = function(score){
    $("#score").text(score);
  }


  return {
    init: init,

    showMole: showMole,

    showScore: showScore
  }

})()