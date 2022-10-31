// Bee is a subclass of Grub, set prototype and constructor
// override age to 5, color to yellow, inherit food and eat
// has attribute job that is 'keep on growing'
var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;