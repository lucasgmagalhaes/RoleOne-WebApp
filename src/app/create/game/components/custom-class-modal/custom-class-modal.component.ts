import { Component, OnInit } from "@angular/core";
import { Modals } from "../../enums/modals.enum";
import { ClassGame } from "./modals/custom-class-modal.interface";
import { CLASSES } from "./modals/mock-class";
@Component({
  selector: "ro1-custom-class-modal",
  templateUrl: "./custom-class-modal.component.html",
  styleUrls: ["./custom-class-modal.component.scss"]
})
export class CustomClassModalComponent implements OnInit {
  id = Modals.CUSTOM_QUEST_MODAL;
  classes: ClassGame[] = CLASSES;
  selectedClass: ClassGame;
  constructor() {
    this.selectedClass = this.classes[0];
  }

  ngOnInit() {}

  selectValueHandle(event) {
    let selectedValue = event.target.value;
    this.selectedClass = this.classes.find(
      clazz => clazz.name == selectedValue
    );
  }
}
