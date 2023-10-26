class Product {
	constructor(private id: number, private name: string, private price: number) {}

	private convertPrice(price: number) {
		return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
	}

	setPrice(price: number) {
		this.price = price;
	}

	setName(name: string) {
		this.name = name;
	}

	getPrice() {
		return this.price;
	}

	getInfo() {
		return {
			id: this.id,
			name: this.name,
			price: this.convertPrice(this.price),
		};
	}
}

class Category {
	private products: Product[] = [];

	constructor(private name: string) {}

	addProduct(product: Product) {
		this.products.push(product);
		const { id, name, price } = product.getInfo();
		console.log(`New product: ${id} - ${name} - ${price}`);
	}

	removeProduct(id: number) {
		const productIndex = this.products.findIndex((product) => product.getInfo().id === id);
		this.products.slice(productIndex, 1);
		console.log(`Product ${id} was removed.`);
	}

	displayProducts() {
		console.log(`ID: ${this.name}`);
		this.products.forEach((product) => console.log({ ...product.getInfo() }));
	}
}

class Order {
	private products: Product[] = [];

	private convertPrice(price: number) {
		return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
	}

	constructor(private id: number) {}

	addProduct(product: Product) {
		this.products.push(product);
		const { id, name, price } = product.getInfo();
		console.log(`New product: ID: ${id} - Name: ${name} - Price: ${price}`);
	}

	removeProduct(id: number) {
		const productIndex = this.products.findIndex((product) => product.getInfo().id === id);
		this.products.slice(productIndex, 1);
		console.log(`Product ${id} was removed.`);
	}

	displayProducts() {
		console.log(`ID: ${this.id}`);
		this.products.forEach((product) => console.log({ ...product.getInfo() }));
	}

	getTotalPrice() {
		const sumTotal = this.products.reduce((sum, product) => sum + product.getPrice(), 0);
		console.log(`ID: ${this.id}`);
		console.log(`Total: ${this.convertPrice(sumTotal)}`);
	}
}

const hardware = new Category("Hardware");
const i7_13900f = new Product(1, "i7_13900f", 2500);
const i5_12400f = new Product(1, "i5_12400f", 1200);
const order01 = new Order(1);

console.log("\n== Category ==\n");

hardware.addProduct(i7_13900f);
hardware.displayProducts();

console.log("\n== Order ==\n");

order01.addProduct(i7_13900f);
order01.addProduct(i5_12400f);
order01.displayProducts();
order01.getTotalPrice();
