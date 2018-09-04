import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "ro1-quest-modal",
  templateUrl: "./quest-modal.component.html",
  styleUrls: ["./quest-modal.component.scss"]
})
export class QuestModalComponent implements OnInit {
  id = "questModal";
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  close() {
    this.modalService.close(this.id);
  }
}
