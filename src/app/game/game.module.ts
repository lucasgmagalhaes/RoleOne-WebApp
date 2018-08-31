import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignComponent } from "./components/campaign/campaign.component";
import { PlayerComponent } from './components/player/player.component';
import { MapComponent } from './components/map/map.component';
import { TagComponent } from './components/tag/tag.component';
import { QuestComponent } from './components/quest/quest.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CampaignComponent, PlayerComponent, MapComponent, TagComponent, QuestComponent],
  exports: [CampaignComponent]
})
export class GameModule {}
