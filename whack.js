var moleModule = (function() {

  var css = "mole";

  // constructor to create mole
  function Mole() {
    this.css = css;
    this.number = Math.floor((Math.random() * 8));
  }

  return {
    Mole: Mole
  };


})();

$(document).ready(function() {
    $(".mole").on("click", function() {});

    setInterval(function() {
      var allSquares = $(".square");

      //clear all squares of moles
      allSquares.removeClass("mole");

      //use module to create a new mole
      var mole = new moleModule.Mole();
      //spawn the mole to appropriate square using css
      allSquares[mole.number].className = "square " + mole.css;

    }, 1000);
  }
);
