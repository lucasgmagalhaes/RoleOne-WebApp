import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ro1-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    //Creates a event for nav burger display
    let navbar: HTMLElement = document.querySelector(".navbar-burger");
    navbar.addEventListener("click", function() {
      let target = navbar.dataset.target;
      let $target = document.getElementById(target);
      navbar.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  }
}
