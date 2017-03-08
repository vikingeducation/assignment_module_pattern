var WAM = WAM || {};

WAM.getRandom = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

WAM.percentChance = function(percentChance){
  var chance = Math.random() * 100;

  if (chance <= percentChance) {
    return true;
  }

  return false;
};