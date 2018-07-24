import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { NotificationService } from "./notification.service";
import { NotificationType } from "../enums/notification.enum";
import { NotificationStructure } from "../interfaces/notification.structure";

@Component({
  selector: "ro1-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
  animations: [
    trigger("notificationShow", [
      state(
        "hidden",
        style({
          "margin-right": "-400px"
        })
      ),
      state(
        "visible",
        style({
          "margin-right": "0px"
        })
      ),
      transition("visible <=> hidden", animate("300ms 0s ease-out"))
    ])
  ]
})
export class NotificationComponent implements OnInit {
  message: string = "";
  notificationShow = "hidden";
  classStyle: NotificationType;
  notifications: NotificationStructure[] = [];
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe(val => {
      this.notificationShow = "visible";
      this.notifications.push(val);
    });
  }

  closeNotification(index: number) {
    this.notificationShow = "hidden";

  }
}
