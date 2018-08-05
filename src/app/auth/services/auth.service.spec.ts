import { TestBed, inject } from "@angular/core/testing";
import { AppModuleForTest } from "../../app.module";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    });
  });

  it("should be created", inject(
    [AuthService],
    (service: AuthService) => {
      expect(service).toBeTruthy();
    }
  ));
});
