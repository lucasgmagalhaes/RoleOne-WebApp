import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "ro1-player-modal",
  templateUrl: "./player-modal.component.html",
  styleUrls: ["./player-modal.component.scss"]
})
export class PlayerModalComponent implements OnInit {
  activate: boolean;
  id = "playerModal";
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  close() {
    this.modalService.close(this.id);
  }
}
