var combinedScripts = combinedScripts || {};

combinedScripts.MyModule = (function(additionalModule) {
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

    stub.getNewModPublicVar = function(){
      return additionalModule.newGetPublicVar();
    }
    return stub;
})(combinedScripts.NewModule);