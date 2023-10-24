interface Order {
	id: number;
	name: string;
}

abstract class Handler {
	protected next: Handler | null = null;

	setNext(handler: Handler): Handler {
		this.next = handler;
		return handler;
	}

	abstract handle(order: Order): void;
}

class OrderHandle extends Handler {
	handle(order: Order): void {
		if (!this.next) return;
		this.next.handle(order);
	}
}

class InventoryHandle extends Handler {
	handle(order: Order): void {
		console.log("checking inventory");
		const hasItem = true;
		if (!hasItem) return console.log("Error: Inventory is empty");
		if (this.next) return this.next.handle(order);
	}
}

class AddressHandle extends Handler {
	handle(order: Order): void {
		console.log("checking address");
		const correctAddress = true;
		if (!correctAddress) return console.log("Error: Address not found");
		if (this.next) return this.next.handle(order);
	}
}

class PaymentHandle extends Handler {
	handle(order: Order): void {
		console.log("checking payment");
		const isApproved = true;
		if (!isApproved) return console.log("Error: Payment was not approved");
		if (this.next) return this.next.handle(order);
		console.log("End");
	}
}

class Shippinghandle extends Handler {
	handle(order: Order): void {
		console.log("Sending order");
	}
}

const order: Order = { id: 0, name: "Computer" };
const orderHandler = new OrderHandle();

orderHandler.setNext(new InventoryHandle()).setNext(new AddressHandle()).setNext(new PaymentHandle()).setNext(new Shippinghandle());
orderHandler.handle(order);
