import { Component, OnInit } from "@angular/core";
import { Modals } from "../../enums/modals.enum";
import { ModalService } from "../../../../shared/services/modal.service";

@Component({
  selector: "ro1-quest-modal",
  templateUrl: "./quest-modal.component.html",
  styleUrls: ["./quest-modal.component.scss"]
})
export class QuestModalComponent implements OnInit {
  id = Modals.QUEST_MODAL;
  //Image source => https://www.flaticon.com/free-icon/coin_138233#term=coin&page=1&position=17
  gold_coin_path = "../../../../../assets/images/gold_coin.png";
  silver_coin_path = "../../../../../assets/images/silver_coin.png";
  bronze_coin_path = "../../../../../assets/images/bronze_coin.png";

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  close() {
    this.modalService.close(this.id);
  }
}
