'use_strict;'

var controller = {
  init: function( model, view ){
  }
};

var model = {
  init: function(){
  },

  // TASK: Build a simple module which utilizes the Revealing Module Pattern and contains:

  // ** Specifically, the object returned in the revealing module contains the variables and methods you want to make public but you don't actually define those functions or varaibles directly on the object...
  // It keeps things clean by making sure the returned object contains nothing but a simple list of properties to make public.

  revealingModule: (function(){
  	// TASK: At least one "hidden" variable (not accessible outside the module)

  	var _privateVar = "Duh duh duhhh";

  	var publicVar = "You bring light in";

  	var getPublicVar = function(){
  		return publicVar
  	};

  	var setPublicVar = function( val ){
  		return publicVar = val
  	};

  	var returnVariablesJoinedTogether = function(){
  		return _privateVar + publicVar
  	};

  	return {
  		getPublicVar: getPublicVar,
  		setPublicVar: setPublicVar,
  		debug: function(){
  			debugger;
  		},
  		returnVariablesJoinedTogether: returnVariablesJoinedTogether
  	};
  })(),

  // TASK: For very large modules, it can sometimes be easier to creat the returned object first and then explicitly add any public methods or variables to it.
  // This also means you don't have to explicitily identify private methods using an underscore (which was just for convenience anyways)
  revealingModule: (function(){
  	var stub = {};

  	var privateVar = "Duh duh duhhh";
  	var publicVar = "You bring light in";

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
  })()

};

var view = {
  init: function(){

  }
};

$(document).ready(function(){
});