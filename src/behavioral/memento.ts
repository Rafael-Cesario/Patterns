interface Memento {
	getState(): string[];
}

class ConcreteMemento implements Memento {
	constructor(private state: string[]) {}

	getState() {
		return this.state;
	}
}

class Originator {
	constructor(private state: string[]) {}

	save() {
		console.log(`Backup made with tasks: ${this.state}`);
		const memento = new ConcreteMemento([...this.state]);
		return memento;
	}

	restore(memento: Memento) {
		this.state = memento.getState();
	}

	createTask(task: string) {
		this.state.push(task);
		console.log(`New task created, current state is: ${this.state}`);
	}
}

class Caretaker {
	private history: Memento[] = [];

	constructor(private originator: Originator) {}

	createBackup() {
		this.history.push(this.originator.save());
	}

	undo() {
		const memento = this.history.pop();
		if (!memento) return;

		this.originator.restore(memento);
		console.log(`Undo tasks to: ${memento.getState()}`);
	}
}

const originator = new Originator([]);
const caretaker = new Caretaker(originator);

originator.createTask("task-01");

caretaker.createBackup();

originator.createTask("task-02");
originator.createTask("task-03");
originator.createTask("task-04");
originator.createTask("task-05");

caretaker.undo();
