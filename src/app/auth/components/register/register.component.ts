import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../model/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "ro1-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  emailErrorMessage: string = "";
  emailExists = false;
  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      username: this.fb.control("lucasteste", [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: this.fb.control("lucastestesas", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  registerUser(user: User) {
    this.auth
      .createNewUser(user)
      .then(() => {
        this.auth.createUserDetail(user);
        this.auth.goToHomeScreen();
      })
      .catch((error: Error) => {
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
