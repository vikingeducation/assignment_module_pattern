model = {
  moles: moleModule.makeMoles(8),
  score: 1,
  multiplier: 1,

  pickMole: function(){
    var rand = Math.floor(Math.random() * model.moles.length);
    return model.moles[rand];
  },

  revealMole: function(){
    var mole = model.pickMole();
    mole.active = true;
  },

  moleStatus: function(){
    var status = []
    for(var i = 0; i < model.moles.length; i++){
      status.push(model.moles[i].active);
    }
    return status
  },

  moleDeactivate: function(number){
    var mole = model.moles[number]
    mole.active = false
  },

  incrementScore: function(){
    model.score += multiplier
  }

  resetMultiplier: function(){
    model.multiplier = 1 
  }


}