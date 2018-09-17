import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { NotificationService } from "./notification.service";
import { NotificationStructure } from "../interfaces/core.interfaces";
/**
 * @constructor NotificationService
 * @description Responsable to display a message setted in NotificationService in the screen for the final user. Use AngularAnimations in notifications
 */
@Component({
  selector: "rpg-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
  animations: [
    trigger("notificationShow", [
      state("visible", style({ transform: "translateX(0)" })),
      transition("void => *", [
        style({ transform: "translateX(100%)" }),
        animate(150)
      ]),
      transition("* => void", [
        animate(150),
        style({ transform: "translateX(100%)" })
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  notifications: NotificationStructure[] = [];
  animate = "";
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe(val => {
      if (val.message !== "") {
        this.notifications.push(val);
        //Remove the notification after 2secs
        setTimeout(() => {
          this.notifications.splice(0, 1);
        }, 2000);
      }
    });
  }

  closeNotification(notification: NotificationStructure) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }
}
