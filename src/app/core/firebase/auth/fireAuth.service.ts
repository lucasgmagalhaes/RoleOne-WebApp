import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";
import "firebase/auth";
import { Observable } from "rxjs";
import { User } from "../../../auth/models/user.model";
/**
 * @class AuthService
 * @see angularfire2 - AngularFireAuth
 * @link https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md
 * @constructor AngularFire2 version: v5.0.0-rc.11
 * @description Encapsulation of AngularFireAuth to manage user authentications.
 * @since 1.0.0
 * **Obs: This methods do not alter the primary methods of angularfire authentication.**
 */
@Injectable({
  providedIn: "root"
})
export class FireAuthService {
  private authenticated: any = undefined;

  constructor(private localAuth: AngularFireAuth) {
    this.localAuth.authState.subscribe(auth => (this.authenticated = auth));
  }

  getAuthState(): Observable<firebase.User> {
    return this.localAuth.authState;
  }

  isAuthenticated(): boolean {
    return this.authenticated !== undefined;
  }

  getIdToken(): Observable<string> {
    return this.localAuth.idToken;
  }

  getIdTokenResult(): Observable<auth.IdTokenResult> {
    return this.localAuth.idTokenResult;
  }

  getUser(): Observable<firebase.User> {
    return this.localAuth.user;
  }

  /*|||||||||| Social Authentications ||||||||||*/

  signInWithPopup(
    provider: firebase.auth.AuthProvider
  ): Promise<auth.UserCredential> {
    return this.localAuth.auth.signInWithPopup(provider);
  }

  signInWithGoogle(): Promise<auth.UserCredential> {
    return this.localAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signInWithFacebook(): Promise<auth.UserCredential> {
    return this.localAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  signInWithGitHub(): Promise<auth.UserCredential> {
    return this.localAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }

  signInWithTwitter(): Promise<auth.UserCredential> {
    return this.localAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<auth.UserCredential> {
    return this.localAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUpUserWithEmailPassword(user: User): Promise<any> {
    return this.localAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  /*||||||||||||||||||||||||||||||||||||||||||||*/

  logout(): Promise<void> {
    return this.localAuth.auth.signOut();
  }
}
