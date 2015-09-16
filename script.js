var WARMUP = WARMUP || {};

WARMUP.SimpleModule = (function(){

  var stub = {};

  var _base_shipping = 4;
  stub.price = 10;


  var _distanceAdjustment = function(distance) {
    if (distance === 'far') {
      return 1.5;
    }
    else if (distance === 'super far') {
      return 2.5;
    }
    else {
      return 0;
    };
  };



  stub.getPrice = function() { return price };

  stub.setPrice = function(newPrice) {
    return price = newPrice;
  };

  stub.getTotalCost = function(distance) {
    var shipping = _base_shipping * _distanceAdjustment(distance);
    return this.price + shipping;
  };

  stub.blameTaxes = function(salaryModule) {
    if (salaryModule.getTaxPaid() > this.getTotalCost('far')) {
      console.log("I can't afford this because of taxes!")
    }
    else {
      console.log("USA! USA!")
    };
  };

  return stub;

})();