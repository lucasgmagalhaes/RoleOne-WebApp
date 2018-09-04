import { ExperiencePipe } from "./experience.pipe";

describe("experiencePipe", () => {
  const pipe = new ExperiencePipe();
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should number 100 return 100", () => {
    let formated = pipe.transform(100);
    expect(formated).toEqual("100");
  });

  it("should string 100 return 100", () => {
    let formated = pipe.transform("100");
    expect(formated).toEqual("100");
  });

  it("should number 1000 return 1K", () => {
    let formated = pipe.transform(1000);
    expect(formated).toEqual("1K");
  });

  it("should string 1000 return 1K", () => {
    let formated = pipe.transform("1000");
    expect(formated).toEqual("1K");
  });

  it("should number 1001 return +1K", () => {
    let formated = pipe.transform(1001);
    expect(formated).toEqual("+1K");
  });

  it("should string 1001 return +1K", () => {
    let formated = pipe.transform("1001");
    expect(formated).toEqual("+1K");
  });

  it("should number 1000000 (1.000.000) return 1M", () => {
    let formated = pipe.transform(1000000);
    expect(formated).toEqual("1M");
  });

  it("should string 1000000 (1.000.000) return 1M", () => {
    let formated = pipe.transform("1000000");
    expect(formated).toEqual("1M");
  });

  it("should number 1000001 (1.000.001) return +1M", () => {
    let formated = pipe.transform(1000001);
    expect(formated).toEqual("+1M");
  });

  it("should string 1000001 (1.000.001) return +1M", () => {
    let formated = pipe.transform("1000001");
    expect(formated).toEqual("+1M");
  });

  it("should number 1000000000 (1.000.000.000) return 1B", () => {
    let formated = pipe.transform(1000000000);
    expect(formated).toEqual("1B");
  });

  it("should string 1000000000 (1.000.000.000) return 1B", () => {
    let formated = pipe.transform("1000000000");
    expect(formated).toEqual("1B");
  });

  it("should number 1000000001 (1.000.000.001) return +1B", () => {
    let formated = pipe.transform(1000000001);
    expect(formated).toEqual("+1B");
  });

  it("should string 1000000001 (1.000.000.001) return +1B", () => {
    let formated = pipe.transform("1000000001");
    expect(formated).toEqual("+1B");
  });

  it("should number 1000000000000 (1.000.000.000.000) return 1T", () => {
    let formated = pipe.transform(1000000000000);
    expect(formated).toEqual("1T");
  });

  it("should string 1000000000000 (1.000.000.000.000) return 1T", () => {
    let formated = pipe.transform("1000000000000");
    expect(formated).toEqual("1T");
  });

  it("should number 1000000000001 (1.000.000.000.001) return +1T", () => {
    let formated = pipe.transform(1000000000001);
    expect(formated).toEqual("+1T");
  });

  it("should string 1000000000001 (1.000.000.000.001) return +1T", () => {
    let formated = pipe.transform("1000000000001");
    expect(formated).toEqual("+1T");
  });

  it("should number 1000000000000000 (1.000.000.000.000.000) return ∞", () => {
    let formated = pipe.transform(1000000000000000);
    expect(formated).toEqual("∞");
  });

  it("should string 1000000000000000 (1.000.000.000.000.000) return ∞", () => {
    let formated = pipe.transform("1000000000000000");
    expect(formated).toEqual("∞");
  });
});
