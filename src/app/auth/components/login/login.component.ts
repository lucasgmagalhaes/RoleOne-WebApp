import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../../model/user";

@Component({
  selector: "ro1-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  passwordMessage = "";
  emailMessage = "";

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  login(user: User) {
    this.passwordMessage = "";
    this.emailMessage = "";
    this.auth
      .login(user.email, user.password)
      .then(() => {
        this.auth.goToHomeScreen();
      })
      .catch(error => {
        if (error["code"] === "auth/wrong-password") {
          this.passwordMessage = "Password does not match";
        } else if (error["code"] === "auth/user-not-found") {
          this.emailMessage = "Email does not exist";
        }
        console.log(error);
      });
  }

  isPasswordValid(): boolean {
    return this.passwordMessage !== "";
  }

  isEmailValid(): boolean {
    if (
      !this.userForm.controls.email.valid &&
      this.userForm.controls.email.touched
    ) {
      this.emailMessage = "Email is invalid";
      return false;
    } else {
      return true;
    }
  }

  emailExists(): boolean {
    return this.emailMessage !== "";
  }
}
