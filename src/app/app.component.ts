import { Component } from "@angular/core";
import { NotificationService } from './core/notification/notification.service';
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list: Observable<any[]>;

  constructor(private notificationService: NotificationService) {
    this.notificationService.setNotification('Sua mãe');
  }

  send(){
    this.notificationService.setNotification('sa');
  }
}
