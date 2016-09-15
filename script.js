var modules = modules || {};

modules.myModule = function() {
  var myObj = {};
  var _myHiddenVar = 35;
  var myPublicVar = 7;

  var _myHiddenMethod = function() {
    return 'the answer to the life, universe and everything is...';
  };

  myObj.getMyPublicVar = function() {
    return myPublicVar;
  };

  myObj.setMyPublicVar = function(val) {
    myPublicVar = val;
  };

  myObj.myPublicMethod = function() {
    return _myHiddenMethod() + (_myHiddenVar + myPublicVar);
  };

  return myObj;
};
