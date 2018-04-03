var assert = require('assert');
var Dinosaur = require('../dinosaur.js');


describe('Dinosaur', function(){
  var dinosaur;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur2 = new Dinosaur("Triceratops", 3);
  });

  it('should have a type', function(){
    assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
  });

  it('should have a number of offspring per year', function(){
    assert.strictEqual(dinosaur1.numberOfOffsprings, 1);
  });







});
