import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";
import * as $ from "jquery";
@Component({
  selector: "rpg-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  userLogged: boolean = false;
  constructor(private auth: AuthService, private route: Router) {}
  ngOnInit() {
    this.createNavBarEvent();
  }

  /**
   * Method from Bulma.io
   * @link https://bulma.io/documentation/components/navbar/
   */
  createNavBarEvent(): void {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  }

  get userName(): string {
    return localStorage.getItem("username");
  }
  /**
   * Clear all session variables and sign out the user from the authentication.
   */
  logout() {
    this.auth.logout();
  }
}
