import { CommaSeparationPipe } from "./comma-separation.pipe";

describe("CommaSeparationPipe", () => {
  const pipe = new CommaSeparationPipe();
  let list: string[] = ["Warrior", "Mage", "Warlord"];
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("[''] should be  ''", () => {
    expect(pipe.transform([""])).toEqual("");
  });

  it("['', '', ''] should be  ''", () => {
    expect(pipe.transform(["", "", ""])).toEqual("");
  });

  it("['   ', '   ', '   '] should be  ''", () => {
    expect(pipe.transform(["   ", "   ", "   "])).toEqual("");
  });

  it("null to be ''", () => {
    expect(pipe.transform(null)).toEqual("");
  });

  it("undefined to be ''", () => {
    expect(pipe.transform(undefined)).toEqual("");
  });

  it("Format without dot have array: ['Warrior', 'Mage', 'Warlord'] and must return Warrior, Mage, Warlord. (without parameter)", () => {
    expect(pipe.transform(list)).toEqual("Warrior, Mage, Warlord");
  });

  it("Format without dot have array: ['Warrior', 'Mage', 'Warlord'] and must return Warrior, Mage, Warlord. (With parameter false)", () => {
    expect(pipe.transform(list, false)).toEqual("Warrior, Mage, Warlord");
  });

  it("Format with dot have array: ['Warrior', 'Mage', 'Warlord'] and must return Warrior, Mage, Warlord.", () => {
    expect(pipe.transform(list, true)).toEqual("Warrior, Mage, Warlord.");
  });
});
