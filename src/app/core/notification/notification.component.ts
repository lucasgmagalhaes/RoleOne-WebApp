import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { NotificationService } from "./notification.service";
import { NotificationStructure } from "../interfaces/notification.structure";
import { NotificationType } from "../enums/notification.enum";

@Component({
  selector: "ro1-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
  animations: [
    trigger("notificationShow", [
      state("visible", style({ transform: "translateX(0)" })),
      transition("void => *", [
        style({ transform: "translateX(100%)" }),
        animate(100)
      ]),
      transition("* => void", [
        animate(100),
        style({ transform: "translateX(100%)" })
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  message: string = "";
  hide: boolean = true;
  notifications: NotificationStructure[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe(val => {
      this.notifications.push(val);
      this.notifications.push({message: "Oo", type: NotificationType.ERROR});
      this.notifications.push({ message: "Oo", type: NotificationType.INFO });
      this.notifications.push({ message: "Oo", type: NotificationType.LIGHT_INFO });
    });
  }

  closeNotification(notification: NotificationStructure) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }
}
