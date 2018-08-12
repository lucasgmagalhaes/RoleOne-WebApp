import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

/**
 * Responsable for verify if the user is logged in. In that case, routes like **register**, **login**
 * and **forgot_Password**
 */
@Injectable({
  providedIn: "root"
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("username")) {
      //If there is an 'username' to the user is logged in
      this.router.navigate(["/home"]);
      return false;
    } else {
      return true;
    }
  }
}
