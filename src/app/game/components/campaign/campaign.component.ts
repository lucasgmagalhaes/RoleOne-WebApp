import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "ro1-campaign",
  templateUrl: "./campaign.component.html",
  styleUrls: ["./campaign.component.scss"]
})
export class CampaignComponent implements OnInit {
  canOpenThemeModal = new BehaviorSubject<boolean>(false);

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openThemeModal() {
    this.modalService.open();
  }
}
