import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HomeComponent } from './home/home.component';
export const ROUTES: Routes = [
  { path: "", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "recover", component: ForgotPasswordComponent },
  { path: "home", component: HomeComponent }
];
