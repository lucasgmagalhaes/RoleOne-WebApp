import { Routes, RouterModule } from "@angular/router";
import { ProfileEditionComponent } from "../detail/components/profile-edition/profile-edition.component";

export const ROUTES: Routes = [
  { path: "profileEdition", component: ProfileEditionComponent }
];

export const StaticRoutesModule = RouterModule.forChild(ROUTES);
