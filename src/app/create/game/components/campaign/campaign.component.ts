import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { Modals } from "../../enums/modals.enum";

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
}
