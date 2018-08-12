import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoggedGuard } from "../guard/logged.guard";
import { NgModule } from "../../../node_modules/@angular/core";

export const ROUTES: Routes = [
  { path: "", component: RegisterComponent, canActivate: [LoggedGuard] },
  { path: "login", component: LoginComponent, canActivate: [LoggedGuard] },
  {
    path: "recover",
    component: ForgotPasswordComponent,
    canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRouteModule {}
