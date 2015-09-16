var WHACK = WHACK || {};

WHACK.MoleModule = (function () {

  var _next_id;
  var moles;
  var _activeMoleID;

  function init() {
    _next_id = 0;
    moles = [];
  };

  function _Mole() {
    this.id = _next_id;
    this.active = false;
    _next_id++;
  };


  _Mole.prototype.activate = function() {
    this.active = true;
    _activeMoleID = this.id;
    return this;
  };

  _Mole.prototype.deactivate = function() {
    this.active = false;
    _activeMoleID = undefined;
  };

  function buildMoles(number) {
    for(var i = 0; i < number; i++) {
      var newMole = new _Mole();
      moles.push(newMole);
    };
    return moles;
  };

  function activateRandomMole() {
    var i = Math.floor(Math.random() * moles.length);
    var mole = moles[i].activate();
    return mole.id;
  };

  function deactivateCurrentMole() {
    moles[_activeMoleID].deactivate;
  };

  function getMoles() {
    return moles;
  };

  return {
    init: init,
    buildMoles: buildMoles,
    activateRandomMole: activateRandomMole,
    deactivateCurrentMole: deactivateCurrentMole,
    getMoles: getMoles
  };

})();