interface Items {
	id: number;
	name: string;
	price: number;
}

interface Database {
	saveItem(name: string, price: number): boolean;
	removeItem(id: number): boolean;
	getItems(): Items[];
}

class PostgresDatabase implements Database {
	private items: Items[] = [];

	getItems(): Items[] {
		return this.items;
	}

	removeItem(id: number): boolean {
		const item = this.items.splice(id, 1);
		return !!item;
	}

	saveItem(name: string, price: number): boolean {
		this.items.push({ name, price, id: this.items.length });
		return true;
	}
}

class InventoryManager implements Database {
	constructor(private database: Database) {}

	getItems(): Items[] {
		return this.database.getItems();
	}

	removeItem(id: number): boolean {
		return this.database.removeItem(id);
	}

	saveItem(name: string, price: number): boolean {
		return this.database.saveItem(name, price);
	}
}

const inventory = new InventoryManager(new PostgresDatabase());
inventory.saveItem("i5 13400", 2500);
inventory.saveItem("i7 13800", 3200);
console.log(inventory.getItems());
