abstract class Workout {
	workout() {
		this.warmUp();
		this.exercise();
		this.rest();
		this.exercise();
		this.coolDown();
	}

	protected abstract warmUp(): void;
	protected abstract exercise(): void;
	protected abstract rest(): void;
	protected abstract coolDown(): void;
}

class HomeWorkout extends Workout {
	protected warmUp(): void {
		console.log(`Warming up at home`);
	}

	protected exercise(): void {
		console.log(`Doing home exercise`);
	}

	protected rest(): void {
		console.log(`Resting at home`);
	}

	protected coolDown(): void {
		console.log(`Finishing workout at home`);
	}
}

class GymWorkout extends Workout {
	protected warmUp(): void {
		console.log("Warming up in the Gym");
	}

	protected exercise(): void {
		console.log("Doing exercise in the gym");
	}

	protected rest(): void {
		console.log("Resting in the gym");
	}

	protected coolDown(): void {
		console.log("Finishing gym workout");
	}
}

const homeWorkout = new HomeWorkout();
homeWorkout.workout();

console.log("\n========================\n");

const gymWorkout = new GymWorkout();
gymWorkout.workout();
