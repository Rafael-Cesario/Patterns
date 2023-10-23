interface IProduct {
	id: number;
	name: string;
	price: number;
}

interface ICartState {
	showProducts(): void;
	addProducts(product: IProduct): void;
	removeProduct(id: number): void;
	buyProducts(): void;
}

abstract class CartState implements ICartState {
	constructor(protected cart: Cart) {}

	showProducts() {
		console.log("\n===== PRODUCTS =====");
		this.cart.products.forEach((product) => {
			console.log(`${product.id}: ${product.name} | ${product.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`);
		});
		console.log("=====\n");
	}

	abstract addProducts(product: IProduct): void;
	abstract removeProduct(id: number): void;
	abstract buyProducts(): void;
}

class EmptyCart extends CartState {
	addProducts(product: IProduct): void {
		this.cart.products.push(product);
		this.cart.setState(new WithItemsCart(this.cart));
	}

	buyProducts(): void {
		console.log(`Cart is current empty`);
	}

	removeProduct(id: number): void {
		console.log(`Cart is current empty`);
	}
}

class WithItemsCart extends CartState {
	addProducts(product: IProduct): void {
		this.cart.products.push(product);
	}

	buyProducts(): void {
		const totalItems = this.cart.products.reduce((sum, item) => sum + item.price, 0);
		console.log(`Total: ${totalItems}`);
	}

	removeProduct(id: number): void {
		const index = this.cart.products.findIndex((item) => item.id === id);
		if (index < 0) return console.log(`Item with id ${id} not found`);
		const [product] = this.cart.products.splice(index, 1);
		console.log(`${product.name} was removed from your cart.`);
	}
}

class Cart implements ICartState {
	public products: IProduct[] = [];
	private state: CartState = new EmptyCart(this);

	showProducts(): void {
		return this.state.showProducts();
	}

	setState(state: CartState) {
		this.state = state;
	}

	addProducts(product: IProduct): void {
		return this.state.addProducts(product);
	}

	buyProducts(): void {
		return this.state.buyProducts();
	}

	removeProduct(id: number): void {
		return this.state.removeProduct(id);
	}
}

const cart = new Cart();
cart.buyProducts();

cart.addProducts({ id: cart.products.length, name: "item 01", price: 4500 });
cart.addProducts({ id: cart.products.length, name: "item 02", price: 240 });
cart.addProducts({ id: cart.products.length, name: "item 03", price: 820 });
cart.removeProduct(1);
cart.showProducts();
cart.buyProducts();
