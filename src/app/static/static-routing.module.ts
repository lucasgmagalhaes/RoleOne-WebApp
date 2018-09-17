import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "../detail/components/profile/profile.component";
import { NgModule } from "@angular/core";
import { CampaignComponent } from "../create/game/components/campaign/campaign.component";

export const ROUTES: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "campaign", component: CampaignComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class StaticRoutesModule {}
