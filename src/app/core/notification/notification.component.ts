import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "ro1-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
  animations: [
    trigger("notificationShow", [
      state(
        "hidden",
        style({
          right: 0,
          opacity: "0px"
        })
      ),
      state(
        "visible",
        style({
          right: "30px",
          opacity: 1
        })
      ),
      transition("hidden => visible", animate("500ms 0s ease-in")),
      transition("visible => hidden", animate("500ms 0s ease-out"))
    ])
  ]
})
export class NotificationComponent implements OnInit {
  @Input() public body: string = "RoleOne";
  public notificationShow = 'visible';

  constructor() {}

  ngOnInit() {}
}
