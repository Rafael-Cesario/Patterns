// e-commerce category

interface Component {
	getName(): string;
}

class Product implements Component {
	constructor(public name: string) {}

	getName(): string {
		return this.name;
	}
}

class Category implements Component {
	private products: Component[] = [];

	getName() {
		const names: string[] = [];
		for (const product of this.products) names.push(product.getName());
		return names.join(", ");
	}

	add(...products: Component[]) {
		products.forEach((product) => this.products.push(product));
	}
}

const i5_10400 = new Product("Intel Core i5-10400F");
const i5_12400 = new Product("Intel Core i5-12400F");

const processors = new Category();
processors.add(i5_10400, i5_12400);

const rtx3060 = new Product("RTX 3060");

const videos = new Category();
videos.add(rtx3060);

const hardware = new Category();
hardware.add(processors, videos);

const allProducts = hardware.getName();
const processorNames = processors.getName();
const videoNames = videos.getName();
console.log({ allProducts, processorNames, videoNames });
