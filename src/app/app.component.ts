import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router: Router, private location: Location) {
    //User is logged
    if (localStorage.getItem("username") && this.location.path() === "/") {
      this.router.navigate(["/home"]);
    }
  }
}
