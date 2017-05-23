var RMP = (function() {
  var _secret = 'secret message';
  var _secretMethod = function() {
    return 'Activate ' + _secret;
  }
  var public = 'public message';
  var getPublicMessage = function() {
    return public
  }
  var setPublicMessage = function(msg) {
    return public = msg;
  }

  return {
    public: public,
    getPublicMessage: getPublicMessage,
    setPublicMessage: setPublicMessage
  }
})();
console.log('------RMP--------');
console.log('RMP.public:', RMP.public);
console.log('RMP.getPublicMessage()):', RMP.getPublicMessage());
console.log("RMP.setPublicMessage('PUBLIC!'):", RMP.setPublicMessage('PUBLIC!'));
console.log("RMP.public:", RMP.public);
console.log("RMP.getPublicMessage():", RMP.getPublicMessage());
console.log("RMP._secret:", RMP._secret);
console.log("RMP._secretMethod():", RMP._secretMethod());