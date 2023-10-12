import { Knight, Mage } from "./characters";
import { ICharacter } from "./interfaces";

export class CharacterFactory {
	mage(characterData: ICharacter) {
		return new Mage(characterData);
	}

	knight(characterData: ICharacter) {
		return new Knight(characterData);
	}
}
