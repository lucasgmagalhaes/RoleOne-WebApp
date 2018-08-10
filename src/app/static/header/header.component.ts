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
    this.createNavBarEvent();
  }

  /**
   * Method from Bulma.io
   * @link https://bulma.io/documentation/components/navbar/
   */
  createNavBarEvent(): void {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
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
