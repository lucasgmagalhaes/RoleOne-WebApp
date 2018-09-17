import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "rpg-selection",
  templateUrl: "./selection.component.html",
  styleUrls: ["./selection.component.scss"]
})
export class SelectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.activateTab();
  }

  /**
   * Activate toggle of the tab component
   * @link Code from https://jsfiddle.net/sol_b/L3wLe6h0/2/
   */
  activateTab(): void {
    $("#tabs li").on("click", function() {
      var tab = $(this).data("tab");

      $("#tabs li").removeClass("is-active");
      $(this).addClass("is-active");

      $("#tab-content div").removeClass("is-active");
      $('div[data-content="' + tab + '"]').addClass("is-active");
    });
  }
}
