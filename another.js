var anotherModule = (function(otherModule){

  var _velM = 443;
  var _phrasing = "knock knock";
  var myCode = 4004;
  var talkToMe = function(){
    return otherModule.publicFunc();
  };
  var getMyCode = function(){
    return myCode;
  };
  var setMyCode = function(val){
    return myCode = val;
  };

  return {
    myCode: myCode,
    talkToMe: talkToMe,
    getMyCode: getMyCode,
    setMyCode: setMyCode
  };

})(myModule);