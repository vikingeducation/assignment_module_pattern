'use_strict;'

var controller = {
  init: function( model, view ){
  }
};

var model = {
  init: function(){
  },

  // Build a simple module which utilizes the Revealing Module Pattern and contains:

  // ** Specifically, the object returned in the revealing module contains the variables and methods you want to make public but you don't actually define those functions or varaibles directly on the object...
  // It keeps things clean by making sure the returned object contains nothing but a simple list of properties to make public.

  revealingModule: (function(){
  	// 1. At least one "hidden" variable (not accessible outside the module)

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
  })()

};

var view = {
  init: function(){

  }
};

$(document).ready(function(){
});