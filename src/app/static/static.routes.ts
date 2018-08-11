import { Routes, RouterModule } from "@angular/router";
import { ProfileEditionComponent } from "../detail/components/profile-edition/profile-edition.component";
import { ProfileComponent } from "../detail/components/profile/profile.component";

export const ROUTES: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "profileEdition", component: ProfileEditionComponent }
];

export const StaticRoutesModule = RouterModule.forChild(ROUTES);
