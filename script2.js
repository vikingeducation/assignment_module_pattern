var WARMUP = WARMUP || {};

WARMUP.SecondModule = (function() {

  var _tax = 0.3;
  var salary = 29;

  function _applyTax() {
    return salary * (1 - _tax);
  };


  return {
    getSalary: function() { return salary },
    setSalary: function(newSalary) {
      return salary = newSalary;
    },
    getTaxPaid: function() {
      return salary - _applyTax();
    }
  };

})();