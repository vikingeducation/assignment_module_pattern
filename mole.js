var moleModule = (function(){

  function Mole(number){
    this.id = number
    this.active = false
  }

  var makeMoles =  function(number){
    var moleArray = []
    for(var i = 0; i < number; i++){
      moleArray.push(new Mole(i))
    }
    return moleArray
  }

  return {
    Mole: Mole,
    makeMoles: makeMoles
  } 
})()

