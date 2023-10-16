import { CharacterFactory } from "./factory";

const characterFactory = new CharacterFactory();

const mage = characterFactory.mage({ name: "Oira", level: 1, spells: ["fireball"] });
mage.showStatus();

const knight = characterFactory.knight({ name: "Guts", level: 10, attacks: ["Sword slash"] });
knight.showStatus();
