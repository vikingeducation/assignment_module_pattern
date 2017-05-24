var NAMESPACE = NAMESPACE || {};

NAMESPACE.Stub = (function() {
  var stub = {};
  // private since we're not including it in our returned stub object
  var secret = 'secret message';
  var secretMethod = function() {
      return 'Activate ' + _secret;
    }
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
console.log('Stub.public:', NAMESPACE.Stub.public);
console.log('Stub.getPublicMessage()):', NAMESPACE.Stub.getPublicMessage());
console.log("Stub.setPublicMessage('PUBLIC!'):", NAMESPACE.Stub.setPublicMessage('PUBLIC!'));
console.log("Stub.public:", NAMESPACE.Stub.public);
console.log("Stub.getPublicMessage():", NAMESPACE.Stub.getPublicMessage());
console.log("Stub.secret:", NAMESPACE.Stub.secret);
// console.log("Stub.secretMethod():", NAMESPACE.Stub.secretMethod());


NAMESPACE.OtherStub = (function(module) {
  console.log(module.getPublicMessage());
  var getModulePublicMessage = function() {
    return module.getPublicMessage();
  }
  var setModulePublicMessage = function(msg) {
    return module.setPublicMessage(msg);
  }
  var _someSecret = 'shhhhh';
  var publiciseSecret = function() {
    return 'let me tell you my secret. it\'s "' + _someSecret + '"';
  }

  return {
    getModulePublicMessage: getModulePublicMessage,
    setModulePublicMessage: setModulePublicMessage,
    publiciseSecret: publiciseSecret
  }
})(NAMESPACE.Stub);

console.log('-------STUB--------')
console.log('getModulePublicMessage', NAMESPACE.OtherStub.getModulePublicMessage());
console.log('setModulePublicMessage', NAMESPACE.OtherStub.setModulePublicMessage('hello'));
console.log("Stub.getPublicMessage():", NAMESPACE.Stub.getPublicMessage());
console.log('publiciseSecret', NAMESPACE.OtherStub.publiciseSecret());