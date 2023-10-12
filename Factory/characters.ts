import { CharacterActions } from "./interfaces";

export class Mage extends CharacterActions {
	showStatus() {
		console.log(this.characterData);
	}
}

export class Knight extends CharacterActions {
	showStatus() {
		console.log(this.characterData);
	}
}
