var WHACK = WHACK || {};

WHACK.MainModule = (function() {

  var numberOfMoles;
  var _playing;
  var _activateTimer;
  var _active;
  var score;
  var playTimer;


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
    playTimer = 0;
    _activateTimer = 0;
    WHACK.Board.enableControls();
    _playing = setInterval(_gameloop, 500)
  };


  function _gameloop() {
    _activateTimer += 500;
    playTimer += 0.5;
    WHACK.Board.updateTimer();

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
    WHACK.Board.disableControls();
    var moleID = $(event.target).index()
    if (WHACK.MoleModule.isActive(moleID)) {
      _deactivateMole();
      score += 1;
      WHACK.Board.updateScore(score);
    };
    setTimeout(WHACK.Board.enableControls, 500);
  };


  function _endGame() {
    WHACK.Board.disableControls();
    clearInterval(_playing);
  };


  function reset() {
    score = 0;
    playTimer = 0;
    WHACK.Board.updateScore(score);
    WHACK.Board.updateTimer();
  };


  function getNumberOfMoles() {
    return numberOfMoles;
  };

  function getTime() {
    return Math.floor(playTimer);
  };


  return {
    init: init,
    userClick: userClick,
    reset: reset,
    getNumberOfMoles: getNumberOfMoles,
    getTime: getTime
  };

})();
