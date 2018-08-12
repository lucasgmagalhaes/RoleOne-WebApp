import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

/**
 * Responsable for verify if the user is logged in. If he is not, he is redirected to
 * login page
 */
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("username")) {
      //If there is an 'username' to the user is logged in
      return true;
    } else {
      //If not, he will be redirected to login page with the return url
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
