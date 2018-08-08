import { TestBed, inject } from '@angular/core/testing';

import { LocationService } from './location.service';
import { AppModuleForTest } from '../../app.module';

describe('LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    });
  });

  it('should be created', inject([LocationService], (service: LocationService) => {
    expect(service).toBeTruthy();
  }));
});
