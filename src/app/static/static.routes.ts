import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "../detail/components/profile/profile.component";

export const ROUTES: Routes = [
  { path: "profile", component: ProfileComponent }
];

export const StaticRoutesModule = RouterModule.forChild(ROUTES);
