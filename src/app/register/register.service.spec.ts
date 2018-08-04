import { TestBed, inject } from "@angular/core/testing";
import { AppModuleForTest } from "../app.module";
import { RegisterService } from "./register.service";

describe("RegisterService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    });
  });

  it("should be created", inject(
    [RegisterService],
    (service: RegisterService) => {
      expect(service).toBeTruthy();
    }
  ));
});
