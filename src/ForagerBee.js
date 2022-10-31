// inherits from Bee, has age 10, job find pollen, canFly true and empty treasureChest array
var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// passes in treasure and pushes to this treasureChest
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}