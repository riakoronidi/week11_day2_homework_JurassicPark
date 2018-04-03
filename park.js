var Park = function(){
  this.enclosure = [];
}

Park.prototype.add = function(dinosaur){
    this.enclosure.push(dinosaur);
};

Park.prototype.removeParticularTypeOfDino = function(type){
  // for(let i=0; i <= this.enclosure.length; i++){
  //   var indexToRemove = this.enclosure.indexOf(type)
  //   if(this.enclosure[i].type === type){
  //     this.enclosure.splice(indexToRemove, 1);
  //   }
  // }
// refactored to work correctly
  var indexToRemove = this.enclosure.indexOf(type)
    this.enclosure.splice(indexToRemove, 1);
};

Park.prototype.countDinosMoreThan2Offsprings = function(){
  let total = 0;
  for(let dinosaur of this.enclosure){
    if(dinosaur.numberOfOffsprings > 2){
      total += 1;
    }
  }
  return total;
};

Park.prototype.getNoOfOffspringsAfterXYear = function(){
  var result = [];
  var total = 0;
  var totalOffsprings = 0;
  for(let i = 0; i < arguments.length; i++){
    for(let dinosaur of this.enclosure){
      result.push(dinosaur);
      totalOffsprings += dinosaur.numberOfOffsprings;
    }
  }
  return total = totalOffsprings + result.length;

};


module.exports = Park;
