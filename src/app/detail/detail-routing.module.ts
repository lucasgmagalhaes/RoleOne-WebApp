import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileEditionComponent } from "./components/profile-edition/profile-edition.component";
export const ROUTES: Routes = [
  { path: "profile/profileedition", component: ProfileEditionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
