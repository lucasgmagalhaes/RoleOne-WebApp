import { TestBed, inject } from "@angular/core/testing";

import { StorageService } from "./storage.service";

describe("StorageService", () => {
  let storageStub = { find: () => {} };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        { provide: StorageService, useValue: storageStub }
      ]
    });
  });

  it("should be created", inject(
    [StorageService],
    (service: StorageService) => {
      expect(service).toBeTruthy();
    }
  ));
});
