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
import { AngularFireAuth } from "angularfire2/auth";
@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.fireSettings),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
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
