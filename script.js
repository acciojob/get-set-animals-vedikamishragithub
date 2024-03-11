//complete this code
class Animal {
	constructor(species){

	this.species=species;
	}
	 makeSound(){
      console.log(`${this.species} makes a sound`);
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		return console.log("purr");
	}
}

class Dog extends Animal {
		constructor(species){
		super(species);
	}
	bark(){
		return console.log("woof");
	}
}
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
