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
  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("lucastestesas", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  login(user: User) {
    this.auth.login(user.email, user.password).then(() => {
      this.auth.goToHomeScreen();
  });
}
}
