import { Component, OnInit, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "ro1-theme-modal",
  templateUrl: "./theme-modal.component.html",
  styleUrls: ["./theme-modal.component.scss"]
})
export class ThemeModalComponent implements OnInit {
  activate: boolean;

  constructor(private modalService: ModalService) {
    this.modalService.status().subscribe(val => (this.activate = val));
  }

  ngOnInit() {}

  close() {
    this.modalService.close();
  }
}
