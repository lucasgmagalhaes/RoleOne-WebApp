import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { NotificationService } from "./notification.service";
import { timer } from "rxjs";
import { NotificationType } from "../enums/notification.enum";

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
  hide: boolean = true;
  private time = timer(2000);

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe(val => {
      this.notificationShow = "visible";
      this.message = val["message"];
      this.classStyle = val["type"];
      console.log(this.hide);

    });
  }

  sethide(val: boolean) {
    if (val) this.notificationShow = "hidden";
    else this.notificationShow = "visible";
  }

  closeNotification() {
    this.notificationShow =
      this.notificationShow === "hidden" ? "visible" : "hidden";
  }
}
