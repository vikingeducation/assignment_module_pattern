//whackamole


var model = function() {

  var init = function() {
    _buildMoles();
  };

  var updateMoles = function() {
    for (var i = 0; i < _moles.length; i++) {
      _moles[i].lit = false;
    }
    var randNum = Math.floor((Math.random() * 7));
    _moles[randNum].lit = true;
  };

  var _buildMoles = function() {
    for(var i = 0; i < 8; i++) {
      _moles[i] = new Mole();
      _moles[i].id = i;
      _moles[i].color = colors[i];
    }
  };

  var colors = ['red', 'green', 'blue',
                'yellow', 'orange', 'pink', 'purple', 'brown'];

  var _moles = [];

  var getMoles = function() {
    return _moles.slice();
  };

  function Mole() {
    var id;
    var lit = false;
    var color;
  }

  return {
    newMole: Mole,
    getMoles: getMoles,
    init: init
  };
};

var view = (function(callbacks) {
  var init = function() {
    
  };

  var renderMoles = function(moles) {
    var mole;
    for (var i = 0; i < moles.length; i++) {
       mole = $('<div>')
        .attr('id', moles[i].id)
        .addClass('mole')
        .appendTo($('body'));
      if (moles[i].lit) {
        mole.css('background-color', moles[i].color);
      }
    }
  };

  return {
    renderMoles: renderMoles
  };
});

var controller = (function(model, view) {
  var interval;

  var init = function() {
    model.init();
  };


  var startLoop = function() {
    _tic();
  };

  var _tic = function() {
    model.updateMoles();
    var moles = model.getMoles();
    view.renderMoles(moles);
  };

  return {
    startLoop: startLoop
  };
})(model, view);

$(document).ready(function() {
  controller.init();
});
