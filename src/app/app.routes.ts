import { Routes } from "@angular/router";
import { RegisterComponent } from "./auth/components/register/register.component";
import { LoginComponent } from "./auth/components/login/login.component";
import { ForgotPasswordComponent } from "./auth/components/forgot-password/forgot-password.component";
import { HomeComponent } from './home/home.component';
export const ROUTES: Routes = [
  { path: "", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "recover", component: ForgotPasswordComponent },
  { path: "home", component: HomeComponent }
];
