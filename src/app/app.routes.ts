import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./guard/auth.guard";
export const ROUTES: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];

export const appRoutesModule = RouterModule.forRoot(ROUTES);
