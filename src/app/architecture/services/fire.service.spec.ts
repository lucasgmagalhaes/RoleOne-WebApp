import { TestBed, inject } from '@angular/core/testing';
import { FireService } from './fire.service';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { async } from "@angular/core/testing";

describe('FireService', () => {

  const fireSpy = jasmine.createSpyObj('AngularFireDatabase', ['create', 'find', 'list']);
  
  const environment = {
    production: false,
    fireSettings: {
      apiKey: "AIzaSyDfB8Kdcv4u0IT_tAw0AAQ5M-DjihfV6KQ",
      authDomain: "cms-api-teste.firebaseapp.com",
      databaseURL: "https://cms-api-teste.firebaseio.com",
      projectId: "cms-api-teste",
      storageBucket: "cms-api-teste.appspot.com",
      messagingSenderId: "646368030718"
    },
    apiName: "cms-api-teste"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.fireSettings, environment.apiName),
        AngularFirestoreModule,
      ],
      providers: [FireService,
        { provide: AngularFireDatabase, useValue: fireSpy }]
    });
  }));

  //Testing if the services is created
  it('should be created', inject([FireService], (service: FireService) => {
    expect(service).toBeTruthy();
  }));

  //Testing if the method will get the two informations in database
  it("Get data from '/tests'", async(() => {
    expect(TestBed.get(FireService).find('tests').valueChanges()).toEqual({ nome: "teste1" },
      { nome: "teste2" });
  }));

  //Testing if no information will be received
  it("Get data from '/test'", (done) => {
    console.log(TestBed.get(FireService));
    expect(TestBed.get(FireService).find('test')).toEqual(undefined);
    done();
  });

});
