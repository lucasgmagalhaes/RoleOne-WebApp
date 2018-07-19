import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabase } from "angularfire2/database";
import { NotificationComponent } from './notification/notification.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(
      environment.fireSettings,
      environment.apiName
    ),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [AngularFireDatabase],
  declarations: [NotificationComponent],
  exports: [NotificationComponent]
})
export class CoreModule {}
