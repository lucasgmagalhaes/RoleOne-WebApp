import { Component, OnInit, Input } from "@angular/core";
import { Campain } from "../../../models/campain.model";

@Component({
  selector: "ro1-campain",
  templateUrl: "./campain.component.html",
  styleUrls: ["./campain.component.scss"]
})
export class CampainComponent implements OnInit {
   /** Defines if the amount of users will be shown */
  @Input() showUsers: boolean;
  /** Defines if the amount of time played in the campain will be shown*/
  @Input() showTime: boolean;
  /** Defines if the status(Online/Offline) will be shown*/
  @Input() showStatus: boolean;
  /** Defines if the user the owner of the campain */
  @Input() owner: boolean;

  @Input() data: Campain;

  constructor() {}

  ngOnInit() {}
}
