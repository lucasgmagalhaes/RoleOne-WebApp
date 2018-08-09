import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { HomeComponent } from "./home-container/components/home/home.component";
export const ROUTES: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];

export const appRoutesModule = RouterModule.forRoot(ROUTES);
