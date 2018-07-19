import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ro1-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  @Input() public body: string = "teste";

  constructor() {}

  ngOnInit() {}
}
