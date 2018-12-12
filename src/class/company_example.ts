export class Person {
	public name: string;
	public age: number;

	protected constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

export enum WorkPosition {
	intern,
	engineer,
	manager
}

export class Employee extends Person {
	public position: WorkPosition;
	private readonly _employeeId: string;

	constructor(name: string, age: number, position: WorkPosition) {
		super(name, age);
		this.position = position;
		this._employeeId = (Math.random() * 10000).toFixed(0);
	}

	aboutMe(): string {
		return `Hi, my name is ${this.name} and I work as a ${
			WorkPosition[this.position]
		}`;
	}
}

// ========= Code to copy and use ========
// import { WorkPosition, Employee } from "./class/company_example";

// // Note: won't be able to run because there is a protected method
// // const noPerson = new Person("bob", 34);
// const internBob = new Employee("bob", 23, WorkPosition.intern);
// console.log(internBob.aboutMe());

// // Note: ts compiler will yell at you, its private!
// // console.log(internBob._employeeId);

// // Question: what will this output be?
// Object.keys(internBob).forEach(key => {
// 	console.log(`${key} --> ${internBob[key]}`);
// });
