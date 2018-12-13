export class Account {
	public accountNumber: number;
	private _notPrivate: string;

	constructor(accNum: number, secret: string) {
		this.accountNumber = accNum;
		this._notPrivate = `the secret: "${secret}" -- is visible outside of the class`;
	}
}

// NOTES:
// import { Account } from "./private_public/Account";
// const a = new Account(1234, "foobar");
// console.log(Object.keys(a));
