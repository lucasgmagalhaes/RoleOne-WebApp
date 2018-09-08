import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ro1-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit {
  /**
   * Define if the componet will have options for choose the user's role and if the **remove** button is enabled
   * If setted with TRUE, only the **add** button will be dislayed
   */
  @Input()
  isForAdd: boolean;

  constructor() {}

  ngOnInit() {}
}
