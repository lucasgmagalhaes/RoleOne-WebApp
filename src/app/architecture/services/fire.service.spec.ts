import { TestBed, inject } from '@angular/core/testing';

import { FireService } from './fire.service';
import { AngularFireDatabase } from "angularfire2/database";

describe('FireService', () => {
 
  const spy = jasmine.createSpyObj('FireService', ['getValue']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFireDatabase, {provide: FireService, useValue: spy}]
    });
  });

  it('should be created', inject([FireService], (service: FireService) => {
    expect(service).toBeTruthy();
  }));
});
