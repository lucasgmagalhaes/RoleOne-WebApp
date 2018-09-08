import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { Modals } from "../../enums/modals.enum";

@Component({
  selector: "ro1-player-modal",
  templateUrl: "./player-modal.component.html",
  styleUrls: ["./player-modal.component.scss"]
})
export class PlayerModalComponent implements OnInit {
  activate: boolean;
  id = Modals.PLAYER_MODAL;
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  close() {
    this.modalService.close(this.id);
  }
}
