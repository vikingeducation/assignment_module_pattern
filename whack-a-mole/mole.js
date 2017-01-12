'use strict';

var MOLE = MOLE || {};

MOLE.Mole = (function(num) {

  function MoleConstuctor(num) {
    this.id = num;
  };

  var createMole = function(num) {
    return new MoleConstuctor(num);
  };

  return {
    createMole: createMole
  };
})();

// module
//   - constructor fn to create new moles
