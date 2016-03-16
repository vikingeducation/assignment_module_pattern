var MyModule = (function() {
  var stub = {};
  var _privateVar = 'private';
  var publicVar = 'public';
  var _privateFunction = function() {
    return 'private function';
  };
  stub.publicFunction = function() {
    return 'not ' + _privateFunction() + ' ' + _privateVar;
  };
  stub.getPublicVar = function() {
    return publicVar;
  };

  stub.setPublicVar = function(value) {
    return publicVar = value;
  };

  return stub;
})();