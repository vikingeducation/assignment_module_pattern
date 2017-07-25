var stub_module = (function($) {
  var obj = {};
  var hidden_var = "hidden";
  var hidden_method = function() { return "hidden"; };
  var public_var = "public";

  obj.getPublicVar = function() {
    return public_var;
  };
  obj.setPublicVar = function(val) {
    return public_var = val;
  };
  obj.public_method = function() {
    return getPublicVar() + " " + hidden_var;
  };


  return obj;
})(jQuery);
