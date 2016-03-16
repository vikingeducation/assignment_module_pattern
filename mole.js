var MOLE = MOLE || {}

MOLE.Mole = (function(){

  var show = function(){
    var randomNum = Math.floor(Math.random() * 8);
    $('#' + randomNum).addClass("lightup");
  }


  return {
    show: show,
  }

})();