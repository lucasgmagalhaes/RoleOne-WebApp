import { Component, OnInit, Input } from "@angular/core";
import { Quest } from "../../interfaces/Quest.interface";

@Component({
  selector: "ro1-quest",
  templateUrl: "./quest.component.html",
  styleUrls: ["./quest.component.scss"]
})
export class QuestComponent implements OnInit {
  @Input()
  quest: Quest;
  constructor() {}

  ngOnInit() {}
}
