import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ro1-item-view",
  templateUrl: "./item-view.component.html",
  styleUrls: ["./item-view.component.scss"]
})
export class ItemViewComponent implements OnInit {
  isSelected: boolean;
  constructor() {}

  ngOnInit() {}

  select() {
    this.isSelected = this.isSelected ? false : true;
  }
}