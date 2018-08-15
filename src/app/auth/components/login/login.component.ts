import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../../models/user.model";
import { FireError } from "../../models/fireError.model";

@Component({
  selector: "ro1-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  emailMessage: string = "";
  passwordMessage: string = "";
  blockAccountMessage: string = "";
  msgError: boolean = false;
  loading: boolean = false;
  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required])
    });
  }

  login(user: User) {
    this.loading = true;
    this.auth
      .login(user.email, user.password)
      .then(() => {
        this.msgError = false;
        this.auth.goToHomeScreen();
        this.loading = false;
      })
      .catch((error: FireError) => {
        this.loading = false;
        if (error.code === "auth/wrong-password") {
          this.passwordMessage = "Passwrod invalid";
        } else if (error.code === "auth/too-many-requests") {
          this.blockAccountMessage = "Too many attemps to login. Try it late";
        } else if (error.code === "auth/user-not-found") {
          this.emailMessage = "Account not found";
        }
        this.emailMessage = "Account not found";
        this.msgError = true;
      });
  }

  emailHttpError(): boolean {
    return this.msgError;
  }

  isEmailValid(): boolean {
    if (
      !this.userForm.controls.email.valid &&
      this.userForm.controls.email.touched
    ) {
      this.emailMessage = "This email is invalid";
      return false;
    } else {
      return true;
    }
  }

  loginWithGoogle(): void {
    this.auth.loginWithGoogle().subscribe(response => {
      this.blockAccountMessage = response;
    });
  }

  isPasswordValid(): boolean {
    return this.passwordMessage === "";
  }

  tooManyAttempts(): boolean {
    return this.blockAccountMessage !== "";
  }
}
