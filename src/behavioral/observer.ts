class News {
	private subscribers: User[] = [];

	subscribe(...users: User[]) {
		this.subscribers.push(...users);
	}

	unSubscribe(user: User) {
		const indexOf = this.subscribers.findIndex((subscriber) => subscriber.id === user.id);
		if (indexOf < 0) return console.log("User not found");
		this.subscribers.splice(indexOf, 1);
	}

	private notifySubscribers(article: string) {
		this.subscribers.forEach((sub) => {
			sub.notify(article);
		});
	}

	publish(article: string) {
		this.notifySubscribers(article);
	}
}

class User {
	constructor(public name: string, public id: number) {}

	notify(article: string) {
		console.log(`${this.name} received a new article: ${article}`);
	}
}

const news = new News();
const user01 = new User("user01", 1);
const user02 = new User("User02", 2);
const user03 = new User("User03", 3);

news.subscribe(user01, user02, user03);
news.publish("Hello World");

console.log("\n======================\n");

news.unSubscribe(user03);
news.publish("Goodbye World");
