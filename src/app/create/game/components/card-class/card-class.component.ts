import { Component, OnInit, Input, Output } from "@angular/core";
import { ClassGame } from "../custom-class-modal/modals/class-modal.interface";

@Component({
  selector: "rpg-card-class",
  templateUrl: "./card-class.component.html",
  styleUrls: ["./card-class.component.scss"]
})
export class CardClassComponent implements OnInit {
  @Input()
  public clazz: ClassGame = {
    name: undefined,
    armosProficience: undefined,
    description: undefined,
    img_url: undefined,
    lifeDice: undefined,
    primaryHabilities: undefined,
    resistenceProficience: undefined,
    weaponsProficience: undefined
  };

  @Input()
  public added: boolean;

  constructor() {}

  ngOnInit() {}
}
