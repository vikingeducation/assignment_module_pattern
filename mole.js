//whackamole


var model = (function() {

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

  var score = 0;

  var getScore = function(){
    return score;
  };

  var getMoles = function() {
    return _moles.slice();
  };

  var checkClick = function(id){
    if(_moles[id].lit){
      updateMoles();
      score ++;
    }
  };

  function Mole() {
    var id;
    var lit = false;
    var color;
  }

  return {
    newMole: Mole,
    getMoles: getMoles,
    init: init,
    updateMoles: updateMoles,
    checkClick: checkClick,
    getScore: getScore
  };
})();

var view = (function() {
  var _onClick;
  var init = function(callback) {
    _onClick = callback;
    clickListener();
  };

  var renderMoles = function(moles, score) {
    $('#mole-container').empty();
    var mole;
    for (var i = 0; i < moles.length; i++) {
       mole = $('<div>')
        .attr('id', moles[i].id)
        .addClass('mole')
        .appendTo($('#mole-container'));
      if (moles[i].lit) {
        mole.addClass("lit");
      }
    }
    $("#score").text("Your score: " + score);
  };

  var clickListener = function(){
    $("#mole-container").on("click", ".mole", function(e){
      var mole_id = e.target.id;
      _onClick(mole_id);
    })
  };

  return {
    init: init,
    renderMoles: renderMoles
  };
})();

var controller = (function(model, view) {
  var interval;

  var init = function() {
    model.init();
    view.init(_checkClick);
    interval = setInterval(_tic, 1000);
  };

  var _tic = function() {
    model.updateMoles();
    var moles = model.getMoles();
    var score = model.getScore();
    view.renderMoles(moles, score);
  };

  var _checkClick = function(id){
    model.checkClick(id);
  };

  return {
    init: init
  };
})(model, view);

$(document).ready(function() {
  controller.init();
});
