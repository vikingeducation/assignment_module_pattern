var WM = WM || {}

WM.MainModule = (function() {

  var _numMoles = 8;
  var moles = [];
  var score = 0;
  var board;

  function init() {
    console.log("Initializing Main...");
    _initMoles(_numMoles);
    _startGameLoop();
    _listenForClick();
  }

  // Set the interval to run _tic
  function _startGameLoop(){
    console.log("setting up game loop");
    setInterval(function(){
      _tic();
    }, 1000)
  }

  // Setup Board with moles
  function _initMoles(_numMoles) {
    _setBoard($('#playing-board ul'));
    for(var i = 0; i < _numMoles ; i++) {
      var mole = new WM.MoleModule.Mole();
      moles.push(mole);
      $('<li><span></span></li>').appendTo(WM.MainModule.getBoard());
    }
  }

  //Clear the mole states
  function _clearMoles() {
    _getMoles().forEach( function(mole) {
      mole.setInactive();
    });
  }

  //Activate random mole
  function _activateRandomMole(_numMoles) {
    var random = Math.floor(Math.random() * _numMoles);
    _getMoles()[random].setActive();
  }

  //Render Moles on board
  function _renderMoles(board) {
    _getMoles().forEach( function(mole, index, array) {
      mole.render(index, WM.MainModule.getBoard());
    });
  }

  //Periodically, clear activate and render
  function _tic() {
    _clearMoles();
    _activateRandomMole(_numMoles);
    _renderMoles(board);
  }

  //Incr Score by 1
  function _incrScore() {
    _setScore(_getScore() + 1);
    $('#score').html(_getScore());
  }

  //Listener for Clicks, incr Score if active mole clicked
  function _listenForClick(){
    mole = $('#playing-board ul li');
    mole.on("click",function(e){
      if (e.currentTarget.classList[0] === "mole") {
        _incrScore();
      }
    })
  }

  //Private functions
  function _getMoles() {
    return moles;
  }
  function _getScore() {
    return score;
  }
  function _setScore(newScore) {
    score = newScore;
  }
  function _setBoard(boardObj) {
    board = boardObj;
  }

  //Public Function
  function getBoard() {
    return board;
  }

  return {
    init: init,
    getBoard: getBoard
  }

})();