import { Component } from "@angular/core";
import { FireService } from "./core/database/fire.service";
import {NotificationService} from './core/notification/notification.service';
import { nextTick } from "../../node_modules/@types/q";
import { Subject, Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list: Observable<any[]>;

  constructor(private notificationService: NotificationService) {
    this.notificationService.setNotification('TESTE');
  }
}
