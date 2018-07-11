import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.fireSettings, environment.apiName),
    AngularFireDatabaseModule
  ],
  declarations: []
})
export class ArchitectureModule { }
