import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabase } from "angularfire2/database";
import { GlobalErrorHandle } from "./exception/global-error-handle";
import { AngularFireAuth } from "angularfire2/auth";
import { NotificationComponent } from "./components/notification/component/notification.component";
import { NotificationService } from "./components/notification/service/notification.service";
/**
 * @since 1.0.0
 */
@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.fireSettings),
    AngularFirestoreModule
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
