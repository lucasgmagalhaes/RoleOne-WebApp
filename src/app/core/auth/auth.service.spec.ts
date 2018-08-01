import { TestBed, inject } from "@angular/core/testing";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let fireStub = { find: () => {} };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: AuthService, useValue: fireStub }]
    });
  });

  it("should be created", inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
