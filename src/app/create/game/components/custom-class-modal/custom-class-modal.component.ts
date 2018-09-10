import { Component, OnInit } from "@angular/core";
import { Modals } from "../../enums/modals.enum";

@Component({
  selector: "ro1-custom-class-modal",
  templateUrl: "./custom-class-modal.component.html",
  styleUrls: ["./custom-class-modal.component.scss"]
})
export class CustomClassModalComponent implements OnInit {
  id = Modals.CUSTOM_QUEST_MODAL;
  constructor() {}

  ngOnInit() {}
}
