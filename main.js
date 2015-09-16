var WHACK = WHACK || {};

WHACK.MainModule = (function() {

  var numberOfMoles;
  var _playing;
  var _activateTimer;
  var _active;
  var score;


  function init(number) {
    numberOfMoles = number;
    _playing = false;
    WHACK.MoleModule.init();
    WHACK.MoleModule.buildMoles(numberOfMoles);
    WHACK.Board.init();
    startGame();
  };


  function startGame() {
    score = 0;
    _activateTimer = 0;
    WHACK.Board.enableControls();
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


  function userClick() {
    var moleID = $(event.target).index()
    if (WHACK.MoleModule.isActive(moleID)) {
      score += 1;
    };
    console.log(score);
  };


  function _endGame() {
    WHACK.Board.disableControls();
    clearInterval(_playing);
  };


  function getNumberOfMoles() {
    return numberOfMoles;
  };


  return {
    init: init,
    userClick: userClick,
    getNumberOfMoles: getNumberOfMoles
  };

})();
