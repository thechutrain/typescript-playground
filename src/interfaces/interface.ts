export interface IDollarAmount {
	cents: number;
	dollars: number;
}

export interface ICartItem {
	itemName: string;
	quantity: number;
	price: IDollarAmount;
}

export function getItemCost(cartItem: ICartItem): IDollarAmount {
	const {
		quantity,
		price: { cents, dollars }
	} = cartItem;

	const centSum = (cents * quantity) % 100;
	const dollarSum = dollars * quantity + Math.floor((cents * quantity) / 100);

	return {
		cents: centSum,
		dollars: dollarSum
	};
}

//  ======= TESTING =======
// const cartItem1: ICartItem = {
// 	itemName: "apples",
// 	quantity: 2,
// 	price: {
// 		dollars: 1,
// 		cents: 65
// 	}
// };

// const sumAmount = getItemCost(cartItem1);
// console.log(JSON.stringify(sumAmount));
