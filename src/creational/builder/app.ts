interface IPizza {
	reset: () => this;
	addPasta: () => this;
}

class PepperoniBuilder implements IPizza {
	private pizza: string[] = [];

	reset() {
		this.pizza = [];
		return this;
	}

	getResult() {
		return this.pizza;
	}

	addPasta() {
		this.pizza.push("Pizza dough");
		return this;
	}

	addPepperoni() {
		this.pizza.push("Pepperoni");
		return this;
	}

	addTomato() {
		this.pizza.push("Tomato sauce");
		return this;
	}

	addOnion() {
		this.pizza.push("Onion");
		return this;
	}

	addMozzarella() {
		this.pizza.push("Mozzarella");
		return this;
	}
}

class PizzaDirector {
	makePepperoni(builder: PepperoniBuilder) {
		builder.addPasta();
		builder.addMozzarella();
		builder.addOnion();
		builder.addPepperoni();
		builder.addTomato();
		const pizza = builder.getResult();
		console.log(`Your pizza: ${pizza.join(", ")}`);
	}
}

const pizzaDirector = new PizzaDirector();
const pepperoniPizza = pizzaDirector.makePepperoni(new PepperoniBuilder());
