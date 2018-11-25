function Vehicle(brand, model, power, tankVolume) {
	this.petrolAmount = 0;
	this.isStarted = false;
	this.tankVolume = tankVolume;
	this.brand = brand;
	this.model = model;
	this.power = power;

}
Vehicle.prototype.getPetrolAmount = function (amount) {
	return this.petrolAmount;
}
Vehicle.prototype.setPetrolAmount = function (amount) {
	if (arguments.length === 0) {
		return this.petrolAmount;
	}
	if (amount < 0) {
		throw new Error('Значение должно быть положительным');
	}
	if (amount > this.tankVolume) {
		throw new Error('В баке не может быть больше чем ' + this.tankVolume);
	}
	this.petrolAmount = amount;
}

Vehicle.prototype.run = function () {
	if (this.petrolAmount === 0) {
		console.log('Закончилось топливо!!');
	} else if (this.petrolAmount < this.tankVolume * 0.05 && this.petrolAmount > 0) {
		console.log('Внимание!! Низкий уровень топлива');
		this.isStarted = true;
		console.log('Врум-врум (c) ' + this.brand + ' ' + this.model);
	} else {
		isStarted = true;
		console.log('Врум-врум (c) ' + this.brand + ' ' + this.model);
	}
}
Vehicle.prototype.stop = function () {
	this.isStarted = false;
	console.log('Трррррр (c) ' + this.brand + ' ' + this.model);
}
Car.prototype = Object.create(Vehicle.prototype);

function Car(brand, model, power, tankVolume){
	this.brand = brand;
	this.model = model;
	this.power = power;
	this.tack = tankVolume;
}

Car.prototype.makeSound = function () {
	console.log("Бип-бип (c) "+this.brand +' ' + this.model);
}



let porshe = new Car('Porshe', '924 Vehiclerera', 210, 30);
let lada = new Car('LADA', 'Kalina', 106, 20);


porshe.setPetrolAmount(1.4);
console.log(porshe.getPetrolAmount());
lada.run();
lada.stop();
porshe.run();
porshe.stop();
porshe.makeSound();
lada.makeSound();