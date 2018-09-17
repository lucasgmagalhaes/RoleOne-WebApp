import { Modals } from "../../enums/modals.enum";
import { ModalService } from "../../../../shared/components/modal/service/modal.service";
import { OnInit, Component } from "@angular/core";

@Component({
  selector: "ro1-campaign",
  templateUrl: "./campaign.component.html",
  styleUrls: ["./campaign.component.scss"]
})
export class CampaignComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openThemeModal() {
    this.modalService.open(Modals.THEME_MODAL);
  }

  openPlayerModal() {
    this.modalService.open(Modals.PLAYER_MODAL);
  }

  openQuestModal() {
    this.modalService.open(Modals.QUEST_MODAL);
  }

  openCustomClassModal() {
    this.modalService.open(Modals.CUSTOM_QUEST_MODAL);
  }
}
