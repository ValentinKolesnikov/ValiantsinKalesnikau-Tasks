function Vehicle(brand, model, power, tankVolume) {
	let petrolAmount = 0;
	let isStarted = false;
	
	this.brand = brand;
	this.model = model;
	this.getPetrolAmount = function(){
		return petrolAmount;
	}
	this.setPetrolAmount = function (amount) {
		if (amount < 0) {
			throw new Error('Значение должно быть положительным');
		}
		if (amount > tankVolume) {
			throw new Error('В баке не может быть больше чем ' + tankVolume);
		}
		petrolAmount = amount;
	}
	this.run = function () {
		if (petrolAmount === 0) {
			console.log('Закончилось топливо!!');
		} else if (petrolAmount < tankVolume * 0.05 && petrolAmount > 0) {
			console.log('Внимание!! Низкий уровень топлива');
			isStarted = true;
			console.log('Врум-врум (c) ' + brand + ' ' + model);
		} else {
			isStarted = true;
			console.log('Врум-врум (c) ' + brand + ' ' + model);
		}
	}
	this.stop = function () {
		isStarted = false;
		console.log('Трррррр (c) ' + brand + ' ' + model);
	}

}

function Car(brand, model, power, tankVolume){
	Vehicle.apply(this, arguments);
	this.makeSound = function(){
		console.log('Бип-бип');
	}
}

let porshe = new Car('Porshe', '229 Carerra', 200, 30);

porshe.setPetrolAmount(1.4);
console.log(porshe.getPetrolAmount());
porshe.makeSound();
porshe.run();
porshe.stop();
