import { Component, OnInit, Input } from "@angular/core";
import { Quest } from "../../interfaces/quest.interface";

@Component({
  selector: "ro1-quest",
  templateUrl: "./quest.component.html",
  styleUrls: ["./quest.component.scss"]
})
export class QuestComponent implements OnInit {
  @Input()
  public quest: Quest;
  constructor() {}

  ngOnInit() {}
}
