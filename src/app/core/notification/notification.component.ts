import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { NotificationService } from "./notification.service";
import { subscribeOn } from "../../../../node_modules/rxjs/operators";

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

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe(val => {
      console.log(val)
      this.message = val;
    })
    //.pipe(switchMap(() => timer(2000)))
    //.subscribe(this.notificationShow = "hidden")
  }

  closeNotification() {
    this.notificationShow =
      this.notificationShow === "hidden" ? "visible" : "hidden";

  }
}
