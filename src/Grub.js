// Grub class has attributes age, color, and food
var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

// has an eat method, I am eating this food
Grub.prototype.eat = function() {
  console.log('I am eating ' + this.food);
}