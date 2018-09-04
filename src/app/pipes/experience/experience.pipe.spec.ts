import { ExperiencePipe } from "./experience.pipe";

describe("experiencePipe", () => {
  const pipe = new ExperiencePipe();
  let formated: string;
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should value 'NaN' return 0", () => {
    formated = pipe.transform(NaN);
    expect(formated).toEqual("0");
  });

  it("should value '' return 0", () => {
    formated = pipe.transform("");
    expect(formated).toEqual("0");
  });

  it("should value 'undefined' return 0", () => {
    formated = pipe.transform(undefined);
    expect(formated).toEqual("0");
  });

  it("should value 'kaaka' return 0", () => {
    formated = pipe.transform(undefined);
    expect(formated).toEqual("0");
  });

  it("should value 'null' return 0", () => {
    formated = pipe.transform(null);
    expect(formated).toEqual("0");
  });

  it("should value 1.5 return 1", () => {
    formated = pipe.transform(1.5);
    expect(formated).toEqual("2");
  });

  it("should value 1.2 return 0", () => {
    formated = pipe.transform(1.2);
    expect(formated).toEqual("1");
  });

  it("should value 1.6 return 0", () => {
    formated = pipe.transform(1.6);
    expect(formated).toEqual("2");
  });

  it("should number 100 return 100", () => {
    formated = pipe.transform(100);
    expect(formated).toEqual("100");
  });

  it("should string 100 return 100", () => {
    formated = pipe.transform("100");
    expect(formated).toEqual("100");
  });

  it("should number 1000 return 1K", () => {
    formated = pipe.transform(1000);
    expect(formated).toEqual("1K");
  });

  it("should number 10000(10.000) return 10K", () => {
    formated = pipe.transform(10000);
    expect(formated).toEqual("10K");
  });

  it("should string 1000 return 1K", () => {
    formated = pipe.transform("1000");
    expect(formated).toEqual("1K");
  });

  it("should number 1001 return +1K", () => {
    formated = pipe.transform(1001);
    expect(formated).toEqual("+1K");
  });

  it("should string 1001 return +1K", () => {
    formated = pipe.transform("1001");
    expect(formated).toEqual("+1K");
  });

  it("should number 1000000 (1.000.000) return 1M", () => {
    formated = pipe.transform(1000000);
    expect(formated).toEqual("1M");
  });

  it("should number 10000000 (10.000.000) return 10M", () => {
    formated = pipe.transform(10000000);
    expect(formated).toEqual("10M");
  });

  it("should number 100000000 (100.000.000) return 100M", () => {
    formated = pipe.transform(100000000);
    expect(formated).toEqual("100M");
  });

  it("should string 1000000 (1.000.000) return 1M", () => {
    formated = pipe.transform("1000000");
    expect(formated).toEqual("1M");
  });

  it("should number 1000001 (1.000.001) return +1M", () => {
    formated = pipe.transform(1000001);
    expect(formated).toEqual("+1M");
  });

  it("should string 1000001 (1.000.001) return +1M", () => {
    formated = pipe.transform("1000001");
    expect(formated).toEqual("+1M");
  });

  it("should number 1000000000 (1.000.000.000) return 1B", () => {
    formated = pipe.transform(1000000000);
    expect(formated).toEqual("1B");
  });

  it("should number 10000000000 (10.000.000.000) return 10B", () => {
    formated = pipe.transform(10000000000);
    expect(formated).toEqual("10B");
  });

  it("should number 100000000000 (100.000.000.000) return 100B", () => {
    formated = pipe.transform(100000000000);
    expect(formated).toEqual("100B");
  });

  it("should string 1000000000 (1.000.000.000) return 1B", () => {
    formated = pipe.transform("1000000000");
    expect(formated).toEqual("1B");
  });

  it("should number 1000000001 (1.000.000.001) return +1B", () => {
    formated = pipe.transform(1000000001);
    expect(formated).toEqual("+1B");
  });

  it("should string 1000000001 (1.000.000.001) return +1B", () => {
    formated = pipe.transform("1000000001");
    expect(formated).toEqual("+1B");
  });

  it("should number 1000000000000 (1.000.000.000.000) return 1T", () => {
    formated = pipe.transform(1000000000000);
    expect(formated).toEqual("1T");
  });

  it("should number 10000000000000 (10.000.000.000.000) return 10T", () => {
    formated = pipe.transform(10000000000000);
    expect(formated).toEqual("10T");
  });

  it("should number 100000000000000 (100.000.000.000.000) return 100T", () => {
    formated = pipe.transform(100000000000000);
    expect(formated).toEqual("100T");
  });

  it("should string 1000000000000 (1.000.000.000.000) return 1T", () => {
    formated = pipe.transform("1000000000000");
    expect(formated).toEqual("1T");
  });

  it("should number 1000000000001 (1.000.000.000.001) return +1T", () => {
    formated = pipe.transform(1000000000001);
    expect(formated).toEqual("+1T");
  });

  it("should string 1000000000001 (1.000.000.000.001) return +1T", () => {
    formated = pipe.transform("1000000000001");
    expect(formated).toEqual("+1T");
  });

  it("should number 1000000000000000 (1.000.000.000.000.000) return ∞", () => {
    formated = pipe.transform(1000000000000000);
    expect(formated).toEqual("∞");
  });

  it("should string 1000000000000000 (1.000.000.000.000.000) return ∞", () => {
    formated = pipe.transform("1000000000000000");
    expect(formated).toEqual("∞");
  });
});
