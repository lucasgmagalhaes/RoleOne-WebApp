import { Component } from "@angular/core";
import { FireService } from "./core/database/fire.service";
import {NotificationService} from './core/notification/notification.service';
import { Observable } from 'rxjs';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list: Observable<any[]>;

  constructor(private notificationService: NotificationService) {
    this.notificationService.notify('TESTE');
    console.log(this.notificationService.notifier);
  }
}