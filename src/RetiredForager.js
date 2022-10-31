// inherits from ForagerBee, has age 40, job gamble, canFly false, color grey
var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// forage overrides ForagerBee forage function
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

// takes in treasure passes pushes to this treasureChest
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}