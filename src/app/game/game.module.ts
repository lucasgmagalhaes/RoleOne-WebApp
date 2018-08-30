import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignComponent } from "./components/campaign/campaign.component";
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CampaignComponent, PlayerComponent],
  exports: [CampaignComponent]
})
export class GameModule {}
