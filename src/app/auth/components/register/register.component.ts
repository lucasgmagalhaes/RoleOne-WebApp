import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../models/user.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "rpg-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  emailErrorMessage: string = "";
  emailExists = false;
  registering: boolean = false;

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      username: this.fb.control("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  registerUser(user: User) {
    this.registering = true;
    this.auth.createNewUser(user).then(() => {
      this.auth.getUserState().subscribe(userget => {
        if (userget) {
          this.auth.createOrUpdateUserDetail({
            id: userget.uid,
            name: user.username,
            email: userget.email
          }).then(storeduser => {
            this.registering = false;
            this.auth.storeVariablesInSession(storeduser.username, userget.uid);
            this.auth.goToHomeScreen();
          });
        }
      });
    })
    .catch(() => {
      this.registering = false;
      this.emailErrorMessage = "Email already exists";
      this.emailExists = true;
    });
  }

  emailAlreadyRegistered(): boolean {
    return this.emailExists;
  }

  isEmailValid(): boolean {
    if (
      !this.userForm.controls.email.valid &&
      this.userForm.controls.email.touched
    ) {
      this.emailErrorMessage = "This email is invalid";
      return false;
    } else {
      return true;
    }
  }

  isUserNameValid(): boolean {
    return (
      !this.userForm.controls.username.valid &&
      this.userForm.controls.username.touched
    );
  }

  isPasswordValid(): boolean {
    return (
      !this.userForm.controls.password.valid &&
      this.userForm.controls.password.touched
    );
  }
}
