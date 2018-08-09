import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { RegisterComponent } from "./components/register/register.component";

export const ROUTES: Routes = [
  { path: "", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "recover", component: ForgotPasswordComponent }
];

export const AuthRouteModule = RouterModule.forChild(ROUTES);
