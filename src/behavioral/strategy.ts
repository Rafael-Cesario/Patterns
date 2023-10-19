interface Strategy {
	pay(): void;
}

class PixMethod implements Strategy {
	pay(): void {
		console.log(`[ Pix ] Payment made with pix method`);
	}
}

class CardMethod implements Strategy {
	pay(): void {
		console.log(`[ Card ] Payment made with card method`);
	}
}

class Payment implements Strategy {
	private paymentMethod: Strategy = new PixMethod();

	setPaymentMethod(method: Strategy) {
		this.paymentMethod = method;
	}

	pay(): void {
		this.paymentMethod.pay();
	}
}

const app = new Payment();

app.setPaymentMethod(new CardMethod());
app.pay();

app.setPaymentMethod(new PixMethod());
app.pay();
