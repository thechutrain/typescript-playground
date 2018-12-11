export class Animal {
	public species: string;

	constructor(species: string) {
		this.species = species;
	}
}

const dog = new Animal("caninee");
console.log(dog.species);
