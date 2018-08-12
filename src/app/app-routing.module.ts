import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { HomeComponent } from "./home-container/components/home/home.component";
import { NgModule } from "@angular/core";
export const ROUTES: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
