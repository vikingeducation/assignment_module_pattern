var MOLE = MOLE || {}

MOLE.Mole = (function(){

  var show = function(){
    // find '.grids' without '.correct'
    var empty = $('.grids').not(document.getElementsByClassName('correct'))

    var randomNum = Math.floor(Math.random() * empty.length);
    $(empty[randomNum]).addClass("lightup");
  }

  var hide = function() {
    $('.lightup').removeClass('lightup');
  }


  return {
    show: show,
    hide: hide
  }

})();