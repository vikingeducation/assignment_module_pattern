var Stub = (function() {

  // private since we're not including it in our returned stub object
  var secret = 'secret message';
  var secretMethod = function() {
    return 'Activate ' + _secret;
  }
  var stub = {};
  // public stuff
  var public = 'public message';
  stub.getPublicMessage = function() {
    return public;
  }
  stub.setPublicMessage = function(msg) {
    return public = msg;
  }

  return stub;

})();

console.log('-------STUB--------')
console.log('Stub.public:', Stub.public);
console.log('Stub.getPublicMessage()):', Stub.getPublicMessage());
console.log("Stub.setPublicMessage('PUBLIC!'):", Stub.setPublicMessage('PUBLIC!'));
console.log("Stub.public:", Stub.public);
console.log("Stub.getPublicMessage():", Stub.getPublicMessage());
console.log("Stub.secret:", Stub.secret);
console.log("Stub.secretMethod():", Stub.secretMethod());