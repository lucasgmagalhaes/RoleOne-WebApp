import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignComponent } from "./components/campaign/campaign.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CampaignComponent],
  exports: [CampaignComponent]
})
export class GameModule {}
