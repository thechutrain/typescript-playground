export function randomAge() {
	return Math.floor(Math.random() * 10) + 21;
}

class Person {
	public name: string;
	public age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public describeMe() {
		console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
	}
}

export default Person;
