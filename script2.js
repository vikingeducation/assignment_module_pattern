var modules = modules || {};


modules.mySecondModule = (function(otherModule) {
  var myObj = {};
  var _myHiddenVar = 29;
  var myPublicVar = 3;

  var _myHiddenMethod = function() {
    return 'the answer to question 11 on the math test...';
  };

  myObj.getMyPublicVar = function() {
    return myPublicVar;
  };

  myObj.setMyPublicVar = function(val) {
    myPublicVar = val;
  };

  myObj.myPublicMethod = function() {
    return otherModule.myPublicMethod() + (_myHiddenVar + myPublicVar);
  };

  return myObj;
})(modules.myModule());
