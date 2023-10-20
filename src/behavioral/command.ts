class TaskQueries {
	private tasks: string[] = [];
	private trash: string[] = [];

	createTask(task: string) {
		this.tasks.push(task);
	}

	deleteTask() {
		const lastTask = this.tasks.pop();
		if (lastTask) this.trash.push(lastTask);
	}

	undo() {
		const task = this.trash.pop();
		if (task) this.tasks.push(task);
	}

	listTasks() {
		console.log(this.tasks);
	}
}

interface Command {
	execute(): void;
	undo(): void;
}

class CreateTask implements Command {
	constructor(private taskQueries: TaskQueries, private task: string) {}

	execute(): void {
		this.taskQueries.createTask(this.task);
	}

	undo() {
		this.taskQueries.deleteTask();
	}
}

class DeleteTask implements Command {
	constructor(private taskQueries: TaskQueries) {}

	execute(): void {
		this.taskQueries.deleteTask();
	}

	undo() {
		this.taskQueries.undo();
	}
}

class Task {
	private commandHistory: Command[] = [];

	executeCommand(command: Command) {
		command.execute();
		this.commandHistory.push(command);
	}

	undo() {
		const lastCommand = this.commandHistory.pop();
		if (lastCommand) lastCommand.undo();
	}
}

const task = new Task();
const taskQueries = new TaskQueries();

task.executeCommand(new CreateTask(taskQueries, "task-01"));
task.executeCommand(new CreateTask(taskQueries, "task-02"));
task.executeCommand(new CreateTask(taskQueries, "task-03"));

task.undo();
taskQueries.listTasks();

task.executeCommand(new DeleteTask(taskQueries));
taskQueries.listTasks();

task.undo();
taskQueries.listTasks();
