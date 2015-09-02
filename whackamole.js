WAM = WAM || {};

WAM.moleModule = (function() {

  function Mole() {
    this.body = $("<div class = 'mole'></div>").appendTo("body");
    this.body.click(function() {
      this.whacked();
    })
  };

  Mole.prototype.popup = function() {
    this.body.addClass("popup");
    setTimeout(function() {
      this.hide.call(this)
    }, 3000)
  }

  Mole.prototype.hide = function() {
    this.body.removeClass("popup")
  }

  Mole.prototype.whacked = function() {
    if (this.body.hasClass("popup")) {
      this.hide();
    };
  }

})();

