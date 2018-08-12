import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "../detail/components/profile/profile.component";
import { NgModule } from "@angular/core";

export const ROUTES: Routes = [
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class StaticRoutesModule {}
