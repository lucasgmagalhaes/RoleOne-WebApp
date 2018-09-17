import { ClickOutDirective } from "./click-out.directive";
import { ElementRef } from "@angular/core";

describe("ClickOutDirective", () => {
  it("should create an instance", () => {
    let element = new ElementRef("<div>BLA</div>");
    const directive = new ClickOutDirective(element);
    expect(directive).toBeTruthy();
  });
});
