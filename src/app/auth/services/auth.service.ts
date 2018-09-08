import { User, AuthUser } from "../models/user.model";
import { Injectable } from "@angular/core";
import { FireService } from "../../core/firebase/database/fire.service";
import { Router } from "@angular/router";
import { LocationService } from "./location.service";
import { FireError } from "../models/fireError.model";
import { Observable, BehaviorSubject } from "rxjs";
import { Location } from "../models/location.model";
import { FireAuthService } from "../../core/firebase/auth/fireAuth.service";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private db: FireService,
    private router: Router,
    private location: LocationService,
    private auth: FireAuthService
  ) {
    this.db.setResource("user_detail");
  }

  /**
   * @returns The super service of the AuthService
   */
  getFireAuth(): FireAuthService {
    return this.auth;
  }

  /**
   * Gived a user, search for him at database, updating his email and username IF
   * the user exists. If don't, create all information about him.
   * @param authUser
   * @returns Conclusion of the operation
   */
  createOrUpdateUserDetail(authUser: AuthUser): Promise<User> {
    return new Promise((resolve, reject) => {
      this.db.find(`users_detail/${authUser.id}`).valueChanges().subscribe((vals: User) => {
        if (vals === null) {
          //User do not exists. So is created a 'user_detail' from scratch
          this.location.getLocation().then(local => {
            let user = this.createUserObject(authUser, local);
            this.db
              .set(user, `users_detail/${authUser.id}`)
              .then(() => resolve(user))
              .catch(error => reject(error));
          });
          //User exists. So is updated his email and name
        } else {
          this.db
            .update({ email: authUser.email }, `users_detail/${authUser.id}`)
            .then(() => resolve(vals))
            .catch(error => reject(error));
        }
      });
    });
  }

  /**
   * Disconnect the logged user Returning him do the root page
   */
  logout() {
    this.auth.logout().then(() => {
      localStorage.removeItem("uid");
      localStorage.removeItem("username");
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
  createNewUser(user: User): Promise<any> {
    return this.auth.signUpUserWithEmailPassword(user);
  }

  /**
   * Store the name and the id of the user in localSession
   * using a framework for make the varable an observable
   * @param name auhenticated user's name
   * @param uid authenticated user's id
   */
  storeVariablesInSession(name: string, uid: string) {
    localStorage.setItem("username", name);
    localStorage.setItem("uid", uid);
  }
  /**
   * Returns the status of the authenticated user
   */
  getUserState(): Observable<firebase.User> {
    return this.auth.getAuthState();
  }

  /**
   * Make login using the firebase authentication with email and password returning a promisse
   * of the login
   * @param email
   * @param senha
   * @returns Promisse of the login
   */
  login(email: string, senha: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, senha).then(() => {
      this.getUserState().subscribe(user => {
          this.createOrUpdateUserDetail({
            id: user.uid,
            name: user.displayName,
            email: user.email
          }).then(storeduser => {
            this.storeVariablesInSession(storeduser.username, user.uid);
            this.goToHomeScreen();
          });
      });
    });
  }

  /**
   * Make login with a google account returning a error message in a Observable if some error appear.
   * If the login was successfull, update the informations of the user and redirectione him to
   * the hom page.
   * @returns Observable error message
   */
  loginWithGoogle(): Observable<string> {
    let errorReturn = new BehaviorSubject<string>(undefined);
    this.auth
      .signInWithGoogle()
      .then(() => {
        this.getUserState().subscribe(user => {
          if (user) {
            // User is logged
            this.createOrUpdateUserDetail({
              id: user.uid,
              name: user.displayName,
              email: user.email
            }).then(storeduser => {
              this.storeVariablesInSession(storeduser.username, user.uid);
              this.goToHomeScreen();
            });
          } else {
            throw new Error("Was not possible to get user state");
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
