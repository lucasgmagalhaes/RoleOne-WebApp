import { TestBed, inject } from "@angular/core/testing";

import { FireAuthService } from "./fireAuth.service";

describe("FireAuthService", () => {
  let fireStub = { find: () => {} };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireAuthService, { provide: FireAuthService, useValue: fireStub }]
    });
  });

  it("should be created", inject([FireAuthService], (service: FireAuthService) => {
    expect(service).toBeTruthy();
  }));
});
