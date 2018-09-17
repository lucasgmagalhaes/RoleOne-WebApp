import { Component, OnInit } from "@angular/core";
import { Theme } from "../../interfaces/theme.interface";
import { Modals } from "../../enums/modals.enum";
import { ModalService } from "../../../../shared/components/modal/service/modal.service";

@Component({
  selector: "ro1-theme-modal",
  templateUrl: "./theme-modal.component.html",
  styleUrls: ["./theme-modal.component.scss"]
})
export class ThemeModalComponent implements OnInit {
  activate: boolean;
  selectedTheme: Theme;
  id = Modals.THEME_MODAL;
  themes: Theme[] = [
    {
      name: "d&d",
      description:
        "Lorem ipsum hendrerit dictumst taciti rhoncus vulputate faucibus rhoncus, proin ut suspendisse nunc" +
        "nisi amet nunc ullamcorper, suspendisse condimentum sodales quisque congue luctus etiam. dui augue in proin habitasse" +
        "faucibus, lectus consectetur eros fringilla inceptos suscipit, eget sollicitudin vitae facilisis. egestas quis" +
        "donec vulputate dui habitant, consequat aenean rhoncus amet fames fringilla, ultrices velit sed fames.",
      races: ["Human", "Orc", "Elf"],
      classes: ["Cleric", "Bard", "Warrior"]
    },
    {
      name: "star wars",
      description: "asdasdasdasdasdasdasdasd",
      races: ["Jedi", "Siff", "Drone"],
      classes: ["Human", "Droid", "Warrior"]
    }
  ];
  constructor(private modalService: ModalService) {
    this.selectedTheme = this.themes[0];
  }

  ngOnInit() {}

  selectValueHandle(event: any) {
    let selectedValue = event.target.value;
    this.selectedTheme = this.themes.filter(
      theme => theme.name == selectedValue
    )[0];
  }

  close() {
    this.modalService.close(this.id);
  }
}
