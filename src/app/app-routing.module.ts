import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { HomeComponent } from "./home-container/components/home/home.component";
import { NgModule } from "@angular/core";
import { MainWindowComponent } from "./in-game/components/main-window/main-window.component";
export const ROUTES: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "in-game", component: MainWindowComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
