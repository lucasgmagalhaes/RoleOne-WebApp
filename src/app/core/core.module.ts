import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from "angularfire2/database";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.fireSettings, environment.apiName),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  providers: [AngularFireDatabase],
  declarations: []
})
export class CoreModule { }
