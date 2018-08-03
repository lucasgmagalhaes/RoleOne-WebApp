import { User } from "../model/user";
import { Injectable } from "@angular/core";
import { FireService } from "../core/database/fire.service";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private db: FireService) {
    this.db.setResource("users/");
  }

  /**
   * Creates a new user IF his email be unique
   */
  createNewUser(user: User) {
    this.db
      .find(ref => ref.orderByChild("email").equalTo(user.email))
      .valueChanges()
      .subscribe(val => {
        if (val.length === 0) {
          this.db.createWithKey(user);
        }
      });
  }
}
