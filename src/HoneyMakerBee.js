// inherits from Bee, has age 10, job make honey and honeyPot set to 0
var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// adds 1 to honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

// subtracts 1 from honeyPot if honeyPot is not empty
HoneyMakerBee.prototype.giveHoney = function() {
  if (this.honeyPot) {
    this.honeyPot--;
  }
}