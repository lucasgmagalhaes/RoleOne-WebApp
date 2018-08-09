import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
export const ROUTES: Routes = [
  { path: "home", component: HomeComponent }
];

export const appRoutesModule = RouterModule.forRoot(ROUTES);
