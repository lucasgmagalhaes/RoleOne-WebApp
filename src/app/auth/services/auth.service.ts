import { User } from "../models/user.model";
import { Injectable } from "@angular/core";
import { FireService } from "../../core/database/fire.service";
import { FireAuthService } from "../../core/auth/fireAuth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private db: FireService,
    private auth: FireAuthService,
    private router: Router
  ) {
    this.db.setResource("users/");
  }

  createUserDetail(user: User): Promise<void> {
    delete user.password;
    return this.db.set(user, `users_detail/${btoa(user.email)}`);
  }

  goToHomeScreen() {
    this.router.navigate(["/home"]);
  }
  /**
   * Creates a new user IF his email be unique.
   * When the user be created, this object will contain
   * his generated key.
   */
  createNewUser(user: User): Promise<any> {
    return this.auth.createUserWithEmailPassword(user);
  }

  login(email: string, senha: string): Promise<any> {
    return this.auth.loginWithEmail(email, senha);
  }

  loginWithGoogle(): Promise<any> {
    return this.auth.loginWithGoogle();
  }

}
