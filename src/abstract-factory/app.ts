interface Workout {
	name: string;
	sets: number;
	repetitions: number;
}

interface Categories {
	arms: () => Workout[];
	legs: () => Workout[];
}

class HomeWorkout implements Categories {
	arms() {
		return [{ name: "push ups", sets: 3, repetitions: 15 }];
	}

	legs() {
		return [{ name: "squats", sets: 3, repetitions: 15 }];
	}
}

class GymWorkout implements Categories {
	arms() {
		return [{ name: "cable bicep burl", sets: 3, repetitions: 12 }];
	}

	legs() {
		return [{ name: "leg press", sets: 3, repetitions: 12 }];
	}
}

interface WorkoutFactory {
	createWorkoutArms: () => void;
	createWorkoutLegs: () => void;
}

class HomeWorkoutFactory implements WorkoutFactory {
	private home = new HomeWorkout();

	createWorkoutArms() {
		console.log(this.home.arms());
	}

	createWorkoutLegs() {
		console.log(this.home.legs());
	}
}

class GymWorkoutFactory implements WorkoutFactory {
	private gym = new GymWorkout();

	createWorkoutArms() {
		console.log(this.gym.arms());
	}

	createWorkoutLegs() {
		console.log(this.gym.legs());
	}
}

const homeWorkout = new HomeWorkoutFactory();
homeWorkout.createWorkoutArms();

const gymWorkout = new GymWorkoutFactory();
gymWorkout.createWorkoutLegs();
