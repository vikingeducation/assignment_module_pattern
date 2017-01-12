'use strict';

var MOLE = MOLE || {};

MOLE.Game = (function(Config, Mole) {
  var moleArray;

  var init = function() {
    moleArray = Array(Config.boardLength).fill(undefined);
  };

  var _checkForUndefined = function(element, index, array) {
    return element === undefined;
  };

  var addMole = function() {
    if (moleArray.some(_checkForUndefined)){
      do {
        var moleHole = Math.floor(Math.random() * 8);
        console.log(moleHole)
        console.log(moleArray[moleHole])
      } while (moleArray[moleHole])
      var newMole = Mole.createMole(moleHole);
      moleArray[moleHole] = newMole;
      return newMole;
    }
    return false;
  };

  var getMoleArray = function() {
    return moleArray;
  }

  var removeMole = function(num) {
    moleArray[num] = undefined;
  }

  return {
    init: init,
    addMole: addMole,
    moleArray: getMoleArray,
    removeMole: removeMole
  }


})(MOLE.Config, MOLE.Mole);


// - moles array collection
// - add a mole:
//   - call the constructor on mole module
//   - generate a random number
//   - add the new mole obj to array collection at random number index
// - delete mole fn
//   - remove the mole from the array collection: set that index to undefined
// - game score
// - getter and setter/incrementer for game score
