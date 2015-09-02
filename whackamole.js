var WAM = WAM || {};

WAM.moleModule = (function() {

  function Mole() {
    var currentMole = this;
    this.body = $("<div class='mole'></div>").appendTo("body");
    this.body.click(function() {
      currentMole.whacked();
    })
  };

  Mole.prototype.popup = function() {
    var currentMole = this;
    this.body.addClass("popup");
    this.currentTimeout = setTimeout(function() {
      currentMole.hide();
    }, 2000)
  }

  Mole.prototype.hide = function() {
    this.body.removeClass("popup")
  }

  Mole.prototype.whacked = function() {
    console.log("You whacked me!");
    if (this.body.hasClass("popup")) {
      clearTimeout(this.currentTimeout);
      this.hide();
      WAM.gameModule.incrementScore();
    };
  }

  return {
    Mole: Mole,
  }

})();

WAM.gameModule = (function($){
  var moles = [];
  var score = 0;
  var $scoreDisplay;
  var screenHeight;
  var screenWidth;

  var play = function(){
    $scoreDisplay = $("#score");
    screenHeight = $(window).height();
    screenWidth = $(window).width();
    var molesPerRow = Math.floor(screenWidth / 100);
    var numOfRows = Math.floor((screenHeight - 50) / 100);
    for (var i = 0; i < (molesPerRow * numOfRows) - numOfRows; i++){
      moles.push(new WAM.moleModule.Mole());
    }
    setInterval(function(){
      popupMole();
    }, 1500);
  }
  var popupMole = function(){
    moles[Math.floor(Math.random() * moles.length)].popup();
  }
  var incrementScore = function(){
    score++;
    updateScore();
  }

  var updateScore = function(){
    console.log($scoreDisplay);
    $scoreDisplay.text("Score: " + score);
  }

  return {
    play: play,
    incrementScore: incrementScore,
  }
})($);


$(document).ready(function(){
  WAM.gameModule.play();
});
