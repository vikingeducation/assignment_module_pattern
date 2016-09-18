var View = (function(){
  
  var _whackMole;

  var init = function(callback){

    _whackMole = callback;
  }

  var showMole = function(id){
    $(".mole").css("visibility", "hidden");
    $(".mole").off("click");
    //id is undefined
    $("#mole" + id).click(function(event){
      _whackMole(event);
      $("#mole" + id).css("visibility", "hidden");
    })
    $("#mole" + id).css("visibility", "visible");
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