var combinedScripts = combinedScripts || {};

combinedScripts.NewModule = (function() {
    var newStub = {};
    var _newPrivateVar = 'new private';
    var newPublicVar = 'new public';
    var _newPrivateFunction = function() {
      return 'new private function';
    };
    newStub.newPublicFunction = function() {
      return 'not ' + _newPrivateFunction() + ' ' + _newPrivateVar;
    };
    newStub.newGetPublicVar = function() {
      return newPublicVar;
    };

    newStub.newSetPublicVar = function(value) {
      return newPublicVar = value;
    };

    return newStub;
})();