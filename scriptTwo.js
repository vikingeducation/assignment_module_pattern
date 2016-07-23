'use_strict;'

var model = model || {};

model.stubModuleTwo = (function(){
  	var stub = {};

  	var privateVar = "My, Myyyyy";
  	var publicVar = "eyeeeee adored you..";

  	stub.getPublicVar = function(){
  		return publicVar
  	};

  	stub.setPublicVar = function( val ){
  		return publicVar = val
  	};

  	stub.returnVariablesJoinedTogether = function(){
  		return privateVar + publicVar
  	};

  	return stub;
  })();