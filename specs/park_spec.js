var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');


describe('Park', function(){
  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;


  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur2 = new Dinosaur("Triceratops", 3);
    dinosaur3 = new Dinosaur("Velociraptor", 5);
  });

  it('enclosure should start empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add dinosaur', function(){
    park.add(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to remove all dinosaurs of a particular type', function(){
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);

    park.removeParticularTypeOfDino("Triceratops");
    assert.strictEqual(park.enclosure.length, 2);
  });

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    assert.strictEqual(park.countDinosMoreThan2Offsprings(), 2);
  });

  it('should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur', function(){
    park.add(dinosaur1);
    assert.strictEqual(park.getNoOfOffspringsAfterXYear(1), 2);
  });

  it('should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur', function(){
    park.add(dinosaur1);
    assert.strictEqual(park.getNoOfOffspringsAfterXYear(1,2), 4);
  });

  it('should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs', function(){
    park.add(dinosaur1);
    park.add(dinosaur2);
    assert.strictEqual(park.getNoOfOffspringsAfterXYear(1,2), 12);
  });













});
