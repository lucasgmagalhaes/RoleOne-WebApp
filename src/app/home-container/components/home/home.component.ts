import { Component, OnInit } from "@angular/core";
//import * as $ from 'jquery';
@Component({
  selector: "ro1-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.activateTab();
  }

  /**
   * Activate toggle of the tab component
   * @link Code from https://jsfiddle.net/sol_b/L3wLe6h0/2/
   */
  activateTab(): void {
/*     $("#tabs li").on("click", function() {
      var tab = $(this).data("tab");

      $("#tabs li").removeClass("is-active");
      $(this).addClass("is-active");

      $("#tab-content p").removeClass("is-active");
      $('p[data-content="' + tab + '"]').addClass("is-active");
    }); */
  }
}
