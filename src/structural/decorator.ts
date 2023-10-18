// Restaurant order

interface IOrder {
	getPrice(): number;
	getItems(): string[];
	showOrder(): string;
}

class MealOrder implements IOrder {
	private items: string[] = ["Meal"];
	private price: number = 12;

	getItems(): string[] {
		return this.items;
	}

	getPrice(): number {
		return this.price;
	}

	showOrder(): string {
		return `Your items: ${this.items.join(", ")}\nYour price: ${this.price}`;
	}
}

class SodaDecorator implements IOrder {
	constructor(private order: IOrder) {}

	getItems(): string[] {
		const items = this.order.getItems();
		items.push("Soda");
		return items;
	}

	getPrice(): number {
		return this.order.getPrice() + 4;
	}

	showOrder(): string {
		return `Your order: ${this.getItems().join(", ")}\nYour price: ${this.getPrice()}`;
	}
}

class CakeDecorator implements IOrder {
	constructor(private order: IOrder) {}

	getItems(): string[] {
		const items = this.order.getItems();
		items.push("Cake");
		return items;
	}

	getPrice(): number {
		return this.order.getPrice() + 5;
	}

	showOrder(): string {
		return `Your order: ${this.getItems().join(", ")}\nYour price: ${this.getPrice()}`;
	}
}

const myOrder = new MealOrder();
const withSoda = new SodaDecorator(myOrder);
const withCake = new CakeDecorator(withSoda);
console.log(withCake.showOrder());
