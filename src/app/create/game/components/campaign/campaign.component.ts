import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "ro1-campaign",
  templateUrl: "./campaign.component.html",
  styleUrls: ["./campaign.component.scss"]
})
export class CampaignComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openThemeModal() {
    this.modalService.open("themeModal");
  }

  openPlayerModal() {
    this.modalService.open("playerModal");
  }
}
