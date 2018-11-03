class Vehicle{
	constructor(brand, model, power, tankVolume){
		this.brand = brand;
		this.model = model;
		this.power = power;
		this.tankVolume = tankVolume;
		this.petrolAmount = 0;
		this.isStarted = false;
	}

	PetrolAmount(amount) {
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

	run() {
		if (this.petrolAmount === 0) {
			console.log('Закончилось топливо!!');
		} else if (this.petrolAmount < this.tankVolume * 0.05 && this.petrolAmount > 0) {
			console.log('Внимание!! Низкий уровень топлива');
			this.isStarted = true;
			console.log('Врум-врум (c) ' + this.brand + ' ' + this.model);
		} else {
			this.isStarted = true;
			console.log('Врум-врум (c) ' + this.brand + ' ' + this.model);
		}
	}
	
	stop() {
		this.isStarted = false;
		console.log('Трррррр (c) ' + this.brand + ' ' + this.model);
	}
}

class Car extends Vehicle{
	constructor(brand, model, power, tankVolume){
		super(brand, model, power, tankVolume);
	}

	makeSound(){
		console.log('Бип-бип (c)' + this.brand + ' ' + this.model);
	}
	stop(){
		super.stop();
		console.log(this.brand+ ' ' + this.model + ' остановилась');
	}
}

let porshe = new Car('Porshe', '229 Carerra', 300, 35);


porshe.PetrolAmount(10);
porshe.PetrolAmount();
porshe.run();
porshe.makeSound();
porshe.stop();