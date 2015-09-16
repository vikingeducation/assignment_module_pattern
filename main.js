var WHACK = WHACK || {};

WHACK.MainModule = (function() {

  var numberOfMoles;
  var _playing;
  var _activateTimer;
  var _active;

  function init(number) {
    numberOfMoles = number;
    _playing = false;
    WHACK.MoleModule.init();
    WHACK.MoleModule.buildMoles(numberOfMoles);
    WHACK.Board.init();
    startGame();
  };

  function startGame() {
    _activateTimer = 0;
    _playing = setInterval(_gameloop, 500)
  };

  function _gameloop() {
    _activateTimer += 500;
    var chance = _activateTimer / (_activateTimer + 500);

    if (Math.random() < chance) {
      _toggleMole();
    };
  };

  function _toggleMole() {
    if (_active) {
      _deactivateMole();
    }
    else {
      _activateRandomMole();
    };
  };

  function _activateRandomMole() {
    var moleID = WHACK.MoleModule.activateRandomMole();
    WHACK.Board.activate(moleID);
    _active = true;

  };

  function _deactivateMole() {
    WHACK.MoleModule.deactivateCurrentMole();
    WHACK.Board.deactivate();
    _active = false;
  };

  function getNumberOfMoles() {
    return numberOfMoles;
  };

  return {
    init: init,
    getNumberOfMoles: getNumberOfMoles
  };

})();