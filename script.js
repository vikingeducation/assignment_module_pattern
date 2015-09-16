var WARMUP = WARMUP || {};

WARMUP.SimpleModule = (function(){

  var _base_shipping = 4;
  var price = 10;


  function _distanceAdjustment(distance) {
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

  function getTotalCost(shipping) {
    return price + shipping;
  };


  return {
    getPrice: function() { return price },
    setPrice: function(newPrice) {
      return price = newPrice;
    },
    getTotalCost: function(distance) {
      return getTotalCost(_base_shipping * _distanceAdjustment(distance));
    }
  }

})();