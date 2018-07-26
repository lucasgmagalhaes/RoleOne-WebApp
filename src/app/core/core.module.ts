import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabase } from "angularfire2/database";
import { NotificationComponent } from "./notification/notification.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NotificationService } from "./notification/notification.service";
import { GlobalErrorHandle } from "./exception/global-error-handle";
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
  providers: [
    AngularFireDatabase,
    NotificationService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandle,
      deps: [NotificationService]
    }
  ],
  declarations: [NotificationComponent],
  exports: [NotificationComponent]
})
export class CoreModule {}
