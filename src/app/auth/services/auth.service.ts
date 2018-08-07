import { User, AuthUser } from "../models/user.model";
import { Injectable } from "@angular/core";
import { FireService } from "../../core/database/fire.service";
import { Router } from "@angular/router";
import { LocationService } from "./location.service";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase";
import { FireError } from "../models/fireError.model";
import { Observable, BehaviorSubject } from "rxjs";
import { Location } from "../models/location.model";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private db: FireService,
    private router: Router,
    private angularAuth: AngularFireAuth,
    private location: LocationService
  ) {}

  /**
   *
   * @param authUser
   */
  createOrUpdateUserDetail(authUser: AuthUser): void {
    this.db.get(`users_detail/${authUser.id}`).subscribe(vals => {
      console.log(vals.length);
      if (vals.length === 0) {
        //User do not exists. So is created a 'user_detail' from scratch
        this.location.getLocation().subscribe(local => {
          let user = this.createUserObject(authUser, local);
          this.db.set(user, `users_detail/${authUser.id}`);
        });
        //User exists. So is updated his email and name
      } else {
        this.db.update(
          { email: authUser.email, username: authUser.name },
          `users_detail/${authUser.id}`
        );
      }
    });
  }

  /**
   * Disconnect the logged user Returning him do the root page
   */
  logout() {
    this.angularAuth.auth.signOut().then(() => {
      localStorage.removeItem("idToken");
      //this.token_id = undefined;
      this.router.navigate(["/"]);
    });
  }

  /**
   * Creates a user based of in the AuthUser and the location
   * @param authUser
   * @param location
   * @returns user created
   */
  private createUserObject(authUser: AuthUser, location: Location): User {
    let email_verified = authUser.verified_email;
    if (authUser.verified_email === undefined) {
      email_verified = false;
    }
    return {
      username: authUser.name,
      email: authUser.email,
      level: 1,
      experience: 0,
      picture_url: "",
      country: location.country,
      state: location.region,
      verified_email: email_verified
    };
  }

  /**
   * Move to home screen
   * @returns promisse of the action
   */
  goToHomeScreen(): Promise<boolean> {
    return this.router.navigate(["/home"]);
  }

  /**
   * Creates a new user IF his email be unique.
   * When the user be created, this object will contain
   * his generated key.
   * @return Observable error message
   */
  createNewUser(user: User): Observable<string> {
    let errorResponse = new BehaviorSubject<string>(undefined);
    this.angularAuth.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.getUserState().subscribe(userget => {
          if (userget) {
            this.createOrUpdateUserDetail({
              id: userget.uid,
              name: user.username,
              email: userget.email
            });
            this.goToHomeScreen();
          }
        });
      })
      .catch(() => {
        errorResponse.next("Email already exists");
      });
    return errorResponse;
  }

  /**
   * Returns the status of the authenticated user
   */
  getUserState(): Observable<firebase.User> {
    return this.angularAuth.authState;
  }

  /**
   * Make login using the firebase authentication with email and password returning a promisse
   * of the login
   * @param email
   * @param senha
   * @returns Promisse of the login
   */
  login(email: string, senha: string): Promise<any> {
    return this.angularAuth.auth.signInWithEmailAndPassword(email, senha);
  }

  /**
   * Make login with a google account returning a error message in a Observable if some error appear.
   * If the login was successfull, update the informations of the user and redirectione him to the hom page
   * @returns Observable error message
   */
  loginWithGoogle(): Observable<string> {
    let errorReturn = new BehaviorSubject<string>(undefined);
    this.angularAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => {
        this.getUserState().subscribe(user => {
          if (user) {
            // User is logged
            this.createOrUpdateUserDetail({
              id: user.uid,
              name: user.displayName,
              email: user.email
            });
            this.goToHomeScreen();
            location.reload();
          }
        });
      })
      .catch((error: FireError) => {
        console.log(error);
        errorReturn.next(
          "Was not possible to authenticate with Gooogle account"
        );
      });
    return errorReturn.asObservable();
  }
}
