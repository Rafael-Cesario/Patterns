export interface ICharacter {
	name: string;
	level: number;
	spells?: string[];
	attacks?: string[];
}

export abstract class CharacterActions {
	constructor(public characterData: ICharacter) {}
	abstract showStatus(): void;
}
