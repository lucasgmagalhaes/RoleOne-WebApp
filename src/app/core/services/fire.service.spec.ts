import { TestBed, inject } from '@angular/core/testing';
import { FireService } from './fire.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { async } from '@angular/core/testing';
import { of } from 'rxjs';

describe('FireService', () => {
  let objects = [
    { 'class': 'warrior' },
    { 'class': 'mage' },
    { 'class': 'archer' }
  ];
  let fireStub = { find: () => { } };

  beforeEach(async(() => {

    spyOn(fireStub, 'find').and.returnValue(of(objects));

    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.fireSettings, environment.apiName),
        AngularFirestoreModule,
        AngularFireDatabaseModule 
      ],
      providers: [FireService,
        { provide: FireService, useValue: fireStub}
      ],
    });
  }));

  it('should be created', inject([FireService], (service: FireService) => {
    expect(service).toBeTruthy();
  }));

  it("find() All data", inject([FireService], (service: FireService) => {
    expect(service.find('test')['value']).toEqual(objects);
  }));

});