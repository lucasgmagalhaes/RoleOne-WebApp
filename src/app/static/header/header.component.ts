import { Component, OnInit } from "@angular/core";
import { FireAuthService } from "../../core/auth/fireAuth.service";
import { Router } from "@angular/router";

@Component({
  selector: "ro1-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  userLogged: boolean = false;
  userName: string = "";
  constructor(private auth: FireAuthService, private route: Router) {}
  ngOnInit() {
    //Creates a event for nav burger display
    let navbar: HTMLElement = document.querySelector(".navbar-burger");
    navbar.addEventListener("click", function() {
      let target = navbar.dataset.target;
      let $target = document.getElementById(target);
      navbar.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
    this.subscribeLogged();
  }

  /**
   * Clear all session variables and sign out the user from the authentication.
   */
  logout() {
    localStorage.clear();
    this.auth.logout();
  }

  subscribeLogged(): void {
    this.auth.getAuthState().subscribe(user => {
      if (user) {
        this.userName = localStorage.getItem("name");
        this.userLogged = true;
      } else {
        this.userLogged = false;
      }
    });
  }
}
