var module = (function($) {
  var hidden_var = "hidden";
  var hidden_method = function() { return "hidden"; };
  var public_var = "public";

  var getPublicVar = function() {
    return public_var;
  };
  var setPublicVar = function(val) {
    return public_var = val;
  };
  var public_method = function() {
    return getPublicVar() + " " + hidden_var;
  };


  return {
    get_public_var: get_public_var,
    set_public_var: set_public_var,
    public_method: public_method
  };
})(jQuery);
