import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "ro1-map-modal",
  templateUrl: "./map-modal.component.html",
  styleUrls: ["./map-modal.component.scss"]
})
export class MapModalComponent implements OnInit {
  id = "mapModal";
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  close() {
    this.modalService.close(this.id);
  }
}
