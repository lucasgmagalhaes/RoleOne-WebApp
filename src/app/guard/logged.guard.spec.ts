import { TestBed, async, inject } from "@angular/core/testing";

import { LoggedGuard } from "./logged.guard";
import { AppModuleForTest } from "../app.module";

describe("LoggedGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    });
  });

  it("should ...", inject([LoggedGuard], (guard: LoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
