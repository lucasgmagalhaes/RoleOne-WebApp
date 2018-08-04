import { Component, OnInit } from "@angular/core";
import { RegisterService } from "./register.service";
import { User } from "../model/user";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "ro1-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(private register: RegisterService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      key: this.fb.control(""),
      username: this.fb.control("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
    console.log(this.userForm)
  }

  registerUser(user: User) {
    this.register.createNewUser(user);
  }

}
