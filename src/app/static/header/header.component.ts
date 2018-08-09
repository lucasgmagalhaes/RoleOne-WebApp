import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";

@Component({
  selector: "ro1-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  userLogged: boolean = false;
  constructor(private auth: AuthService, private route: Router) {}
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
