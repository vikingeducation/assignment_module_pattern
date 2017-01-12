'use strict';

var SecondModule = (function() {

  var _darkBunny = "I've eaten all my friends.";
  var lightBunny = 'eats carrots';

  var _setDarkBunny = function(val) {
    _darkBunny = val || _darkBunny;
  };

  var darkBunnySpotlight = function(val) {
    _setDarkBunny(val);
    console.log("Dark Bunny says: " + _darkBunny);
    console.log("Dark Bunny feels: sad, because he has no friends.");
  };

  var lightBunnyGetter = function() {
    return lightBunny;
  };

  var lightBunnySetter = function(val) {
    return lightBunny = val;
  };

  return {
    darkBunnySpotlight: darkBunnySpotlight,
    lightBunnyGetter: lightBunnyGetter,
    lightBunnySetter: lightBunnySetter
  };

})();
