"use strict";

var WHACK_A_MOLE = WHACK_A_MOLE || {};

WHACK_A_MOLE.Mole = (function($) {

  var _imageSrc = "/assets/images/mole.jpg";

  var _randomTime = function() {
    var times = [6000, 5000, 4000, 3000, 2000];
    var index = Math.floor((Math.random() * 100)) % times.length;
    return times[index];
  };

  var Mole = function Mole() {
    this.$element = $('<div class="mole col-xs-3">' +
      '<img class="img-responsive img-circle" src="' + _imageSrc + '"/>' +
    '</div>');

    this.$element.on('click', $.proxy(this.whack, this));
    this.$element.css('cursor', 'pointer');

    this.isHidden = true;
    this.justWhacked = false;
    this.hide();

    this.startTimer();
  };

  Mole.prototype.show = function() {
    this.isHidden = false;
    $(this.$element).find('img').show();
    this.startTimer();
  };

  Mole.prototype.hide = function() {
    this.isHidden = true;
    $(this.$element).find('img').hide();
    this.startTimer();
  };

  Mole.prototype.whack = function(e) {
    if (!this.isHidden) {
      this.hide();
      this.stopTimer();
      this.justWhacked = true;
      this.startTimer();
      $(document).trigger('score');
    }
  };

  Mole.prototype.startTimer = function() {
    var time = _randomTime();
    var that = this;
    this._id = setTimeout(function() {
      if (that.isHidden && !that.justWhacked) {
        that.show();
      } else if (!that.isHidden && !justWhacked) {
        that.hide();
      } else if (that.justWhacked) {
        that.justWhacked = false;
      }
    }, time);
    console.log(time);
  };

  Mole.prototype.stopTimer = function() {
    clearTimeout(this._id);
  };

  return Mole;

})($);

