// Cache

interface Task {
	id: number;
	title: string;
	status: "next" | "current" | "done";
}

interface IService {
	getTasks(): Promise<Task[]>;
}

class UserService implements IService {
	private tasks: Task[] = [
		{ id: 0, title: "To do", status: "next" },
		{ id: 1, title: "something to do", status: "current" },
	];

	async getTasks(): Promise<Task[]> {
		return new Promise((resolve) => setTimeout(() => resolve(this.tasks), 2000));
	}
}

class UserServiceProxy implements IService {
	private cacheTasks: Task[] = [];

	constructor(private userService: UserService) {}

	async getTasks(): Promise<Task[]> {
		if (this.cacheTasks.length > 0) return this.cacheTasks;

		const tasks = await this.userService.getTasks();
		this.cacheTasks.push(...tasks);
		return tasks;
	}
}

const app = new UserServiceProxy(new UserService());

const getTasks = async () => {
	const tasks = await app.getTasks();
	console.log(tasks);

	let i = 0;
	for (i; i < 3; i++) {
		console.log("From cache");
		console.log(await app.getTasks());
	}
};

getTasks();
