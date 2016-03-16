var MOLES = MOLES || {};

MOLES.Utils = (function() {
  var randomInterval = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return {
    randomInterval: randomInterval,
  }
})();

MOLES.Mole = function() {
  this.visible = false;
  this.el = null;

  this.init = function() {
  };

  this.show = function() {
    this.visible = true;
    var that = this;
    this.el.addClass('showing');
    var interval = MOLES.Utils.randomInterval(500, 2000)
    setTimeout(function() { that.hide() }, interval);
  };

  this.addElement = function(element) {
    this.el = element;
    var that = this;
    this.el.click(function() {
      if(that.visible) {
        that.el.removeClass('showing');
        that.visible = false;
        MOLES.Model.addToScore();
      }
    })
  };

  this.hide = function() {
    this.visible = false
    this.el.removeClass('showing');
    var interval = MOLES.Utils.randomInterval(1000, 16000)
    var that = this;
    setTimeout(function() { that.show() }, interval);
  };

};

MOLES.Model = (function() {

  var _numMoles = 8;
  var moles = [];
  var score = 0;

  var init = function() {
    for (var i = 0; i < _numMoles; ++i) {
      var mole = new MOLES.Mole();
      mole.init();
      moles.push(mole);
    }
  }

  var addToScore = function() {
    score += 1;
    return score;
  }

  var getScore = function() {
    return score;
  }

  var getMoles = function() {
    return moles;
  }

  return {
    init: init,
    getMoles: getMoles,
    getScore: getScore,
    addToScore: addToScore
  };

})();


MOLES.View = (function() {

  var $element = null;

  var init = function(id) {
    $element = $(id);
    setup();
  };

  var setup = function() {
    var moles = MOLES.Model.getMoles();
    moles.forEach(function(mole) {
      var moleObject = $('<div>');
      moleObject.addClass('mole');
      $element.append(moleObject);
      mole.addElement(moleObject);
      mole.hide();
    })
  }

  var render = function() {
    $('#score').text(MOLES.Model.getScore());
  }

  return {
    init: init,
    render: render,
  }

})();

$(function() {
  MOLES.Model.init();
  MOLES.View.init('#moles');
  setInterval(function() {
    MOLES.View.render();
  }, 100)
})
