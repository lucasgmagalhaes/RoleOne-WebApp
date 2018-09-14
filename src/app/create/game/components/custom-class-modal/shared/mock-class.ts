import { ClassGame } from "./custom-class-modal.interface";
export const CLASSES: ClassGame[] = [
  {
    name: "Warrior",
    description: "A combat master, expert on a wide range of weapons and armor",
    primaryHability: ["Strength"],
    resistenceProficience: ["Strength", "Constitution"],
    weaponsProficience: ["Simple Weapons", "Martial weapons"],
    armoProficience: ["All armo"],
    lifeDice: "d10"
  },
  {
    name: "Mage",
    description:
      "A user of magic spelled, able to  manipulate the structures of reality",
    primaryHability: ["Inteligence"],
    resistenceProficience: ["Inteligence", "Wisdom"],
    weaponsProficience: [
      "Daggers",
      "Darts",
      "Holsters",
      "Batons",
      "Light beasts"
    ],
    armoProficience: [""],
    lifeDice: "d6"
  },
  {
    name: "Monk",
    description:
      "A user of magic spelled, able to manipulate the structures of reality",
    primaryHability: ["Dexterity", "Wisdom"],
    resistenceProficience: ["Strength", "Dexterity"],
    weaponsProficience: ["Simple Weapons", "Short Swords"],
    armoProficience: [""],
    lifeDice: "d6"
  },
  {
    name: "Druid",
    description:
      "A priest of Ancient Belief, keeper of the powers of nature - light of the moon and plant growth, fire and lightning - and capable of adopting animals",
    primaryHability: ["Wisdom"],
    resistenceProficience: ["Inteligence", "Wisdom"],
    weaponsProficience: [
      "Claves",
      "Daggers",
      "Darts",
      "Thrushes",
      "Apples",
      "Scimitars",
      "Scythes",
      "Sleeves",
      "Spears"
    ],
    armoProficience: [
      "Light and medium armor (nonmetal)",
      "Shields",
      "Other than cast iron"
    ],
    lifeDice: "d8"
  }
];
