function Car (color,owner) {
  this.color = color 
  this.owner = owner
  // this.carName = 'BMW'
  // this.lang = 4900
  // this.height = 1400
  Car.prototype.height = 1400
  Car.prototype.lang = 4900
  Car.prototype.carName = 'BMW'
}

var car = new Car('red','mrhuang')
var car1 = new Car('green','haonan')

console.log(car1);