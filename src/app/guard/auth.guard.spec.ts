import { TestBed, async, inject } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";
import { AppModuleForTest } from "../app.module";

describe("AuthGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    });
  });

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
