class Network {
	private users: User[] = [];

	addUser(user: User) {
		this.users.push(user);
	}

	sendPost(title: string, description: string, sender: User) {
		this.users.forEach((user) => {
			if (user === sender) return;
			user.notify(title, description);
		});
	}
}

class User {
	constructor(private network: Network, private name: string) {
		network.addUser(this);
	}

	sendPost(title: string, description: string) {
		console.log(`${this.name} send a post`);
		this.network.sendPost(title, description, this);
	}

	notify(title: string, description: string) {
		console.log(`${this.name} received a post: ${title}, ${description}`);
	}
}

const network = new Network();
const user01 = new User(network, "user-01");
const user02 = new User(network, "user-02");
const user03 = new User(network, "user-03");
const user04 = new User(network, "user-04");
const user05 = new User(network, "user-05");
const user06 = new User(network, "user-06");

user01.sendPost("hello", "world");
